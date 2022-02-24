import mongoose from "mongoose";

import playerSchema from "../schemas/player";

export const Player = mongoose.model("Player", playerSchema);
