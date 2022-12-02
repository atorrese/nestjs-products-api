import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: { type: String, require: true },
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});