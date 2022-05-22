import internal from "stream";

class PlayerStats {
    name: string;
    champion: string;
    kills: number;
    deaths: number;
    assists: number;
    minions: number;
    gold: number;
    damage: number;

    constructor(
        name: string,
        champion: string,
        kills: number,
        deaths: number,
        assists: number,
        minions: number,
        gold: number,
        damage: number
    ) {
        this.name = name;
        this.champion = champion;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.minions = minions;
        this.gold = gold;
        this.damage = damage;
    }
}

export default PlayerStats;
