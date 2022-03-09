import { SlashCommandBuilder } from "@discordjs/builders";
import { Player } from "../models/models";

const test = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("testing mongo stuff!"),
  async execute(interaction) {
    
    await interaction.reply("blahlbalhlahlb");
  },
};

export default test;
