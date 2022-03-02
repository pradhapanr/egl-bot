import { SlashCommandBuilder } from "@discordjs/builders";

import createPlayer from "./subcommands/create";
import deletePlayer from "./subcommands/delete";
import updatePlayerName from "./subcommands/update-name";
import updatePlayerPoints from "./subcommands/update-points";
import updatePlayerRole from "./subcommands/update-role";
import updatePlayerTeam from "./subcommands/update-team";

const player = {
  data: new SlashCommandBuilder()
    .setName("player")
    .setDescription("Command for managing players")
    /**
     * create command
     */
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
            .addChoice("Edge Gamers Lounge", "Edge Gamers Lounge")
            .addChoice("Nice Gaming", "Nice Gaming")
            .addChoice("Tempo Rush", "Tempo Rush")
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
    /**
     * delete command
     */
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
    )
    /**
     * update-team command
     */
    .addSubcommand((subcommand) =>
      subcommand
        .setName("update-team")
        .setDescription("Update a players team in the database.")
        .addStringOption((option) =>
          option
            .setName("name")
            .setDescription("The players name.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("newteam")
            .setDescription("The players new team.")
            .setRequired(true)
            .addChoice("Edge Gamers Lounge", "Edge Gamers Lounge")
            .addChoice("Nice Gaming", "Nice Gaming")
            .addChoice("Tempo Rush", "Tempo Rush")
            .addChoice("Free Agent", "Free Agent")
        )
    )
    /**
     * update-name command
     */
    .addSubcommand((subcommand) =>
      subcommand
        .setName("update-name")
        .setDescription("Update a players name in the database.")
        .addStringOption((option) =>
          option
            .setName("oldname")
            .setDescription("The players old name.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("newname")
            .setDescription("The players new name.")
            .setRequired(true)
        )
    )
    /**
     * update-role command
     */
    .addSubcommand((subcommand) =>
      subcommand
        .setName("update-role")
        .setDescription("Update a players role in the database.")
        .addStringOption((option) =>
          option
            .setName("name")
            .setDescription("The players name.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("newrole")
            .setDescription("The players new role.")
            .setRequired(true)
            .addChoice("Top", "Top")
            .addChoice("Jungle", "Jungle")
            .addChoice("Mid", "Mid")
            .addChoice("Bot", "Bot")
            .addChoice("Support", "Support")
        )
    )
    /**
     * update-points command
     */
    .addSubcommand((subcommand) =>
      subcommand
        .setName("update-points")
        .setDescription("Update a players point value in the database.")
        .addStringOption((option) =>
          option
            .setName("name")
            .setDescription("The players name.")
            .setRequired(true)
        )
        .addIntegerOption((option) =>
          option
            .setName("newpoints")
            .setDescription("The players new point value.")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    switch (command) {
      case "create":
        createPlayer(interaction);
        break;
      case "delete":
        deletePlayer(interaction);
        break;
      case "update-name":
        updatePlayerName(interaction);
        break;
      case "update-points":
        updatePlayerPoints(interaction);
        break;
      case "update-role":
        updatePlayerRole(interaction);
        break;
      case "update-team":
        updatePlayerTeam(interaction);
        break;
    }
  },
};

export default player;
