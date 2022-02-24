import { SlashCommandBuilder } from "@discordjs/builders";

const player = {
  data: new SlashCommandBuilder()
    .setName("player")
    .setDescription("Command for managing players")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a new player in the database.")
        .addStringOption((option) =>
          option
            .setName("username")
            .setDescription("Username of the player.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("team")
            .setDescription("Team that the player is on.")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("delete")
        .setDescription("Delete a player in the database.")
        .addStringOption((option) =>
          option
            .setName("username")
            .setDescription("Username of the player.")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    if (interaction.options.getSubcommand() === "create") {
      const username = interaction.options.getString("username");
      console.log(username);
      await interaction.reply("yoooo");
    }

    switch (command) {
      case "create":
        break;
      case "delete":
        break;
    }
  },
};

export default player;
