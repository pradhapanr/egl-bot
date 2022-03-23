import { SlashCommandBuilder } from "@discordjs/builders";
import parseData from "../../utils/game-parser";

const game = {
  data: new SlashCommandBuilder()
    .setName("game")
    .setDescription("Command for controling games")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("upload")
        .setDescription("upload new game")
        .addStringOption((option) =>
          option.setName("link").setDescription("Pastebin link to game details")
        )
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "upload") {
      const url = interaction.options.getString("link");
      await parseData(url);
    }
  },
};

export default game;
