import { SlashCommandBuilder } from "@discordjs/builders";

import { Player, Team } from "../../models/models";
import getRank from "../../utils/league-stats";

const player = {
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
        const name = interaction.options.getString("name");
        const league = interaction.options.getString("league");

        const player = await Player.find({ username: name });

        console.log(typeof player[0]._id);

        const team = new Team({});

        team.name = "BALL";
        team.players.push(player[0]._id);
        team.league = "BIG";

        await team.save();
        await interaction.reply(`obobboob`);

        break;
      case "delete":
        break;
    }
  },
};

export default player;
