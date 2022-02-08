import { Client, Collection, Intents } from "discord.js";

import commandArray from "./commands/CommandArray";
import config from "../config.json";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.commands = new Collection();

for (const command of commandArray) {
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Bot is online!");
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
