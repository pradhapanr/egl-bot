import { Player } from "../../../models/models";

async function deletePlayer(interaction) {
  const username = interaction.options.getString("username");

  const res = await Player.deleteOne({ summonerName: username });

  if (res.deletedCount == 0) {
    await interaction.reply(
      "That user does not exist. Make sure you entered the username correctly (case sensitive)."
    );
  } else {
    await interaction.reply(`${username} has been deleted from the database.`);
  }
}

export default deletePlayer;
