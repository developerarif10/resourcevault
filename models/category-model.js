import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  description: {
    required: false,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Category =
  mongoose.models.Category ?? mongoose.model("Category", categorySchema);
