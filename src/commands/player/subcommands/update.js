import { Player } from "../../../models/models";
import getRank from "../../../utils/league-stats";

const ERROR_MESSAGE =
  "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

/**
 * updatable fields:
 * name
 * role
 * pointValue
 * team
 */

async function updatePlayer(interaction) {
  const username = interaction.options.getString("username");
  const field = interaction.options.getString("field");
  const replacement = interaction.options.getString("replacement");

  try {
    await interaction.reply(`${username} has been added to the database.`);
  } catch (e) {
    if (e.code == 11000) {
      await interaction.reply(
        `${username} already exists in the database. No action will be executed.`
      );
    } else {
      await interaction.reply(ERROR_MESSAGE);
    }
  }
}

export default updatePlayer;
