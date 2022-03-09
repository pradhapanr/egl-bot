import { Team } from "../../../models/models";

const ERROR_MESSAGE =
  "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

async function createTeam(interaction) {
  const name = interaction.options.getString("name");
  const league = interaction.options.getString("league");

  try {
    const team = new Team({ name: name, league: league, players: [] });

    await team.save();
    await interaction.reply(`${name} has been added to the Teams database.`);
  } catch (e) {
    console.error(e);
    if (e.code == 11000) {
      await interaction.reply(
        `${name} already exists in the database. No action will be executed.`
      );
    } else {
      await interaction.reply(ERROR_MESSAGE);
    }
  }
}

export default createTeam;
