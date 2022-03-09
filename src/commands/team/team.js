import { SlashCommandBuilder } from "@discordjs/builders";

import createTeam from "./subcommands/create";

const team = {
  data: new SlashCommandBuilder()
    .setName("team")
    .setDescription("Command for managing teams,")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a new team in the database.")
        .addStringOption((option) =>
          option
            .setName("name")
            .setDescription("Name of the team.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("league")
            .setDescription("League that the team plays in.")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    switch (command) {
      case "create":
        createTeam(interaction);
        break;
      case "delete":
        break;
    }
  },
};

export default team;
