/**
 * This file is solely here for the purpose of transferring over all of
 * the commands in a simple way that doesn't take up a lot of lines
 * in the main command handler. There's probably a better way to do this, I
 * just have no clue what it is right now.
 */
import game from "./game/game";
import player from "./player/player";
import team from "./team/team";

export const commandArray = [game, player, team];

export default commandArray;
