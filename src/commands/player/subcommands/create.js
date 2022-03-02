import { Player } from "../../../models/models";
import getRank from "../../../utils/league-stats";

const ERROR_MESSAGE =
  "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

async function createPlayer(interaction) {
  const username = interaction.options.getString("username");
  const team = interaction.options.getString("team");
  const circuitPoints = interaction.options.getInteger("circuitpoints");
  const role = interaction.options.getString("role");

  try {
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
  } catch (e) {
    console.error(e);
    if (e.code == 11000) {
      await interaction.reply(
        `${username} already exists in the database. No action will be executed.`
      );
    } else {
      await interaction.reply(ERROR_MESSAGE);
    }
  }
}

export default createPlayer;
