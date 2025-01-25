import mongoose, { Schema } from "mongoose";

const resourceSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    // unique: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  icon: {
    required: false,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
});

export const Resource =
  mongoose.models.Resource ?? mongoose.model("Resource", resourceSchema);
