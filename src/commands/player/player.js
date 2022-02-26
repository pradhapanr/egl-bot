import { SlashCommandBuilder } from "@discordjs/builders";

import { Player } from "../../models/models";
import getRank from "../../utils/league-stats";

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
        .addIntegerOption((option) =>
          option
            .setName("circuitpoints")
            .setDescription("The Circuit Point value of the player.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("role")
            .setDescription("The role that this player fills.")
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

    switch (command) {
      case "create":
        const username = interaction.options.getString("username");
        const team = interaction.options.getString("team");
        const circuitPoints = interaction.options.getInteger("circuitpoints");
        const role = interaction.options.getString("role");

        const rank = await getRank(username);

        const player = new Player({
          summonerName: username,
          role: role,
          tier: rank.tier,
          division: rank.division,
          leaguePoints: rank.leaguePoints,
          pointValue: circuitPoints,
          team: team,
        });

        await player.save();
        await interaction.reply(`${username} has been added to the database.`);

        break;
      case "delete":
        break;
    }
  },
};

export default player;
