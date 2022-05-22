import { Collection } from "discord.js";
import { ExtendedClient } from "./structures/Client";
import mongoose from "mongoose";

import commandArray from "./commands/command-array";
import config from "../config.json" assert { type: "json" };

const client = new ExtendedClient();

client.commands = new Collection();

for (const command of commandArray) {
    client.commands.set(command.data.name, command);
}

client.on("ready", () => {
    console.log("Bot is online!");

    try {
        // Connect to the MongoDB cluster
        mongoose.connect(config.mongoUri, {
            autoIndex: true,
        });
        console.log("Connected to MongoDB!");
    } catch (e) {
        console.error("Connection to MongoDB Failed.");
        console.error(e);
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
        });
    }
});

client.login(config.token);
mongoose.connection.close();
