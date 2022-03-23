import mongoose from "mongoose";

const seriesSchema = mongoose.Schema({
  team1Name: {
    type: String,
    required: true,
  },
  team2Name: {
    type: String,
    required: true,
  },
  team1Victory: {
    type: Boolean,
    required: true,
  },
  numGames: {
    type: Number,
    required: true,
  },
  // games: [
  //   {
  //     game: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Game",
  //     },
  //   },
  // ],
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
});

export default seriesSchema;
