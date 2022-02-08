import { SlashCommandBuilder } from "@discordjs/builders";

const ping = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("blahlbalhlahlb");
  },
};

export default ping;
