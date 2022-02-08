import { Client, Collection, Intents } from "discord.js";

import config from "../config.json";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.commands = new Collection();

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply("balls");
  }
});

client.login(config.token);
