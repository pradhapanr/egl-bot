import mongoose from "mongoose";

import playerSchema from "../schemas/player";
import teamSchema from "../schemas/team";
import gameSchema from "../schemas/game";
import seriesSchema from "../schemas/series";

export const Player = mongoose.model("Player", playerSchema);
export const Team = mongoose.model("Team", teamSchema);
export const Game = mongoose.model("Game", gameSchema);
export const Series = mongoose.model("Series", seriesSchema);
