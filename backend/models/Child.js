import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      default: "A",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Child", childSchema);