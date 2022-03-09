import { Player, Team } from "../../../models/models";

async function deletePlayer(interaction) {
  const username = interaction.options.getString("username");

  const res = await Player.findOneAndDelete({ summonerName: username });

  if (!res) {
    await interaction.reply(
      "That user does not exist. Make sure you entered the username correctly (case sensitive)."
    );
  }

  const team = res.team;

  await Team.updateOne(
    { name: team },
    { $pull: { players: { name: username } } }
  );

  await interaction.reply(`${username} has been deleted from the database.`);
}
export default deletePlayer;
