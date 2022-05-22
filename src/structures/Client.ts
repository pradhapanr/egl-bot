import { Client, Collection, Intents } from "discord.js";

export class ExtendedClient extends Client {
    commands: Collection<unknown, any>;

    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS] });
    }
}
