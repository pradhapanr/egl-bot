import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  summonerName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  tier: {
    type: Number,
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
});

export default playerSchema;
