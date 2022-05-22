import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
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
    gameTime: {
        type: Number,
        required: true,
    },
    gameNumber: {
        type: Number,
        required: true,
    },
    team1Players: [
        {
            name: {
                type: String,
                required: true,
            },
            champion: {
                type: String,
                required: true,
            },
            kills: {
                type: Number,
                required: true,
            },
            deaths: {
                type: Number,
                required: true,
            },
            assists: {
                type: Number,
                required: true,
            },
            minions: {
                type: Number,
                required: true,
            },
            gold: {
                type: Number,
                required: true,
            },
            damage: {
                type: Number,
                required: true,
            },
        },
    ],
    team2Players: [
        {
            name: {
                type: String,
                required: true,
            },
            champion: {
                type: String,
                required: true,
            },
            kills: {
                type: Number,
                required: true,
            },
            deaths: {
                type: Number,
                required: true,
            },
            assists: {
                type: Number,
                required: true,
            },
            minions: {
                type: Number,
                required: true,
            },
            gold: {
                type: Number,
                required: true,
            },
            damage: {
                type: Number,
                required: true,
            },
        },
    ],
});

export default gameSchema;
