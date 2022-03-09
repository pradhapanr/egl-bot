import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  players: [
    {
      name: {
        type: String,
      },
    },
  ],
  league: {
    type: String,
    required: true,
  },
});

export default teamSchema;
