import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  summonerName: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  role: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
    required: true,
  },
  division: {
    type: Number,
  },
  leaguePoints: {
    type: Number,
  },
  pointValue: {
    type: Number,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

export default playerSchema;
