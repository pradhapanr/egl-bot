import { Player } from "../../../models/models";

const ERROR_MESSAGE =
    "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

async function updatePlayerPoints(interaction) {
    const name = interaction.options.getString("name");
    const points = interaction.options.getInteger("newpoints");

    try {
        const filter = { summonerName: name };
        const update = { pointValue: points };

        const res = await Player.findOneAndUpdate(filter, update);

        if (!res) {
            await interaction.reply(
                `${name} could not be found in the players database. Please check the spelling of the player name and try again.`
            );
        } else {
            await interaction.reply(
                `${name} has been changed to ${points} points in the database.`
            );
        }
    } catch (e) {
        console.error(e);
        await interaction.reply(ERROR_MESSAGE);
    }
}

export default updatePlayerPoints;
