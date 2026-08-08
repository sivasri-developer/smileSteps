import mongoose from "mongoose";

const activityProgressSchema = new mongoose.Schema(
  {
    child: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child",
      required: true,
    },

    activityName: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const ActivityProgress = mongoose.model(
  "ActivityProgress",
  activityProgressSchema
);

export default ActivityProgress;