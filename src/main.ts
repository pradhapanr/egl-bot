import { Client } from "discord.js";
import { token } from "../config.json";
import fs from "fs";

const client = new Client({
  intents: [],
});

client.on("ready", async () => {
  console.log("Bot is online!");
});

client.login(token);
