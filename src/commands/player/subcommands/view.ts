import { Player } from "../../../models/models";
import getRank from "../../../utils/league-stats";
import { MessageEmbed } from "discord.js";

const ERROR_MESSAGE =
    "There was an error while executing this command. Please retry in a bit and if that doesn't work, let any Head of House members know.";

async function viewPlayer(interaction) {
    const name = interaction.options.getString("name");

    try {
        const res = await Player.findOne({ summonerName: name });

        if (!res) {
            await interaction.reply(
                `The player ${name} does not exist in the database.`
            );
            return;
        }

        const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Prxd")
            .setDescription("Mid Laner for Nice Gaming")
            .setThumbnail(
                "https://cdn.discordapp.com/attachments/887181299654209558/947968139013001266/NiceLogo.png"
            )
            .addFields(
                { name: "Team", value: "Nice Gaming" },
                { name: "Role", value: "Mid" },
                { name: "Circuit Point Value", value: "55" },
                { name: "Rank", value: "Platinum III 40 LP" },
                { name: "Record", value: "0-0" }
            );

        console.log(res);

        await interaction.reply({ embeds: [embed] });
    } catch (e) {
        console.error(e);
    }
}

export default viewPlayer;
