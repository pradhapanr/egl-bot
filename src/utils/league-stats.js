import config from "../../config.json";
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

  let division;

  switch (rankData.rank) {
    case "I":
      division = 1;
    case "II":
      division = 2;
    case "III":
      division = 3;
    case "IV":
      division = 4;
  }

  const rank = {
    tier: rankData.tier,
    division: division,
    leaguePoints: rankData.leaguePoints,
  };

  return rank;
}

export default getRank;
