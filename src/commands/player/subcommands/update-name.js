import { Player } from "../../../models/models";

const ERROR_MESSAGE =
  "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

async function updatePlayerName(interaction) {
  const old_name = interaction.options.getString("oldname");
  const new_name = interaction.options.getString("newname");

  try {
    const filter = { summonerName: old_name };
    const update = { summonerName: new_name };

    const res = await Player.findOneAndUpdate(filter, update);

    if (!res) {
      await interaction.reply(
        `${old_name} could not be found in the players database. Please check the spelling of the player name and try again.`
      );
    } else {
      await interaction.reply(
        `${old_name} has been changed to ${new_name} in the database.`
      );
    }
  } catch (e) {
    console.error(e);
    await interaction.reply(ERROR_MESSAGE);
  }
}

export default updatePlayerName;
