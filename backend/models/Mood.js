import mongoose from "mongoose";

const moodSchema = new mongoose.Schema(
  {
    child: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child",
      required: true,
    },

    mood: {
      type: String,
      enum: ["Happy", "Okay", "Sad", "Angry", "Tired"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Mood", moodSchema);