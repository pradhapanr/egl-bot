import { SlashCommandBuilder } from "@discordjs/builders";

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
      interaction.reply("you tried to upload good job broski");
    }
  },
};

export default game;
