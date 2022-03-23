import axios from "axios";
import papaparse from "papaparse";

import PlayerStats from "./PlayerStats";
import { Game } from "../models/models";
import { Series } from "../models/models";

//TODO: fix this fucking mess

const config = {
  quotes: false, //or array of booleans
  quoteChar: '"',
  escapeChar: '"',
  delimiter: ",",
  header: false,
  newline: "\r\n",
  skipEmptyLines: "greedy", //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
  columns: null, //or array of strings
};

export default async function parseData(url) {
  const rawUrl = createRawUrl(url);
  const dataString = await getPastebinData(rawUrl);
  const parseRes = papaparse.parse(dataString, config);

  const team1 = parseRes.data[0][0];
  const team2 = parseRes.data[0][1];
  const seriesWinningTeam = parseRes.data[0][2];
  const numGames = parseRes.data[0][3];

  const team1SeriesVictory = seriesWinningTeam === team1 ? true : false;

  const gameIds = [];

  console.log(parseRes);

  //index 2 is first game
  //index 13 is second game
  //index 24 is third game
  // increase of 11...

  for (let i = 0; i < numGames; i++) {
    const gameIndex = i * 11 + 1;

    const gameWinningTeam = parseRes.data[gameIndex][0];
    const gameTime = parseRes.data[gameIndex][1];

    const timeDetails = gameTime.split(":");

    const gameTimeInSeconds =
      parseInt(timeDetails[0] * 60) + parseInt(timeDetails[1]);

    const team1Victory = gameWinningTeam === team1 ? true : false;

    const team1Players = [];
    const team2Players = [];

    console.log(gameWinningTeam);
    console.log(gameTime);

    // blue team loop
    for (let j = 0; j < 5; j++) {
      //index = 2 + j + (i * 11)
      const index = i * 11 + j + 2;

      const username = parseRes.data[index][0];
      const champion = parseRes.data[index][1];
      const kills = parseInt(parseRes.data[index][2]);
      const deaths = parseInt(parseRes.data[index][3]);
      const assists = parseInt(parseRes.data[index][4]);
      const minions = parseInt(parseRes.data[index][5]);
      const gold = parseInt(parseRes.data[index][6]);
      const damage = parseInt(parseRes.data[index][7]);

      team1Players.push(
        new PlayerStats(
          username,
          champion,
          kills,
          deaths,
          assists,
          minions,
          gold,
          damage
        )
      );
    }

    for (let j = 5; j < 10; j++) {
      const index = i * 11 + j + 2;

      const username = parseRes.data[index][0];
      const champion = parseRes.data[index][1];
      const kills = parseInt(parseRes.data[index][2]);
      const deaths = parseInt(parseRes.data[index][3]);
      const assists = parseInt(parseRes.data[index][4]);
      const minions = parseInt(parseRes.data[index][5]);
      const gold = parseInt(parseRes.data[index][6]);
      const damage = parseInt(parseRes.data[index][7]);

      team2Players.push(
        new PlayerStats(
          username,
          champion,
          kills,
          deaths,
          assists,
          minions,
          gold,
          damage
        )
      );
    }

    console.log(team2Players);

    const game = new Game({
      team1Name: team1,
      team2Name: team2,
      team1Victory: team1Victory,
      gameTime: gameTimeInSeconds,
      gameNumber: i + 1,
      team1Players: team1Players,
      team2Players: team2Players,
    });
    const gameObj = await game.save();
    gameIds.push(gameObj._id);
  }
  // console.log(team1, team2, seriesWinningTeam, numGames);
  console.log(gameIds);

  const series = new Series({
    team1Name: team1,
    team2Name: team2,
    team1Victory: team1SeriesVictory,
    numGames: numGames,
    games: gameIds,
  });

  console.log(series);

  await series.save();
}

function createRawUrl(originalUrl) {
  const rawUrl =
    originalUrl.substring(0, 21) +
    "raw/" +
    originalUrl.substring(21, originalUrl.length);
  return rawUrl;
}

async function getPastebinData(pasteUrl) {
  let data;

  try {
    const res = await axios.get(pasteUrl);
    data = res.data;
  } catch (err) {
    console.log("BAD REQUEST");
    process.exit(1);
  }
  return data;
}

// const str = await getPastebinData("BznTbiUZ");
// console.log(str);
// parseData(str);

//parseData("https://pastebin.com/PkBUMBSh");
// parseData("https://pastebin.com/SSC6wXnG");
