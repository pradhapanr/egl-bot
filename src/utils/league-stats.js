import config from "../../config.json" assert { type: "json" };
import fetch from "node-fetch";

async function getRank(username) {
  const summonerId = await getSummonerId(username);
  return getRankData(summonerId);
}

async function getSummonerId(username) {
  const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${config.riotKey}`;
  const res = await fetch(url);

  const summoner = await res.json();

  return summoner.id;
}

async function getRankData(summonerId) {
  const url = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${config.riotKey}`;
  const res = await fetch(url);

  const rankData = (await res.json())[0];

  if (!rankData) {
    const rank = {
      tier: "UNRANKED",
      division: 0,
      leaguePoints: 0,
    };
    return rank;
  }

  let division;

  switch (rankData.rank) {
    case "I":
      division = 1;
      break;
    case "II":
      division = 2;
      break;
    case "III":
      division = 3;
      break;
    case "IV":
      division = 4;
      break;
  }

  const rank = {
    tier: rankData.tier,
    division: division,
    leaguePoints: rankData.leaguePoints,
  };

  return rank;
}

export default getRank;
