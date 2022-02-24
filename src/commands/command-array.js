/**
 * This file is solely here for the purpose of transferring over all of
 * the commands in a simple way that doesn't take up a lot of lines
 * in the main command handler. There's probably a better way to do this, I
 * just have no clue what it is right now.
 */
import ping from "./ping";
import game from "./game";
import test from "./test";
import player from "./player";

export const commandArray = [ping, game, test, player];

export default commandArray;
