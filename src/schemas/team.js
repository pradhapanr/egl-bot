import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
  ],
  league: {
    type: String,
    required: true,
  },
});

export default teamSchema;
