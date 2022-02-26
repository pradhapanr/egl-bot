import mongoose from "mongoose";

import playerSchema from "../schemas/player";
import teamSchema from "../schemas/team";

export const Player = mongoose.model("Player", playerSchema);
export const Team = mongoose.model("Team", teamSchema);
