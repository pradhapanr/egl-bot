import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import commandArray from "./commands/command-array";
import config from "../config.json" assert { type: "json" };

const commands = [];

for (const command of commandArray) {
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(config.token);

rest
  .put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
