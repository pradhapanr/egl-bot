import { SlashCommandBuilder } from "@discordjs/builders";
import { Player } from "../models/models";

const test = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("testing mongo stuff!"),
  async execute(interaction) {
    const player = new Player({
      summonerName: "boopbop",
      role: "swiggity",
      tier: 1,
      division: 1,
      leaguePoints: 1,
      pointValue: 1,
    });
    await player.save();
    await interaction.reply("blahlbalhlahlb");
  },
};

export default test;
