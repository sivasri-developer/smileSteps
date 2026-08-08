import ActivityProgress from "../models/ActivityProgress.js";

// Save completed activity
const saveActivityProgress = async (req, res) => {
  try {
    const { child, activityName } = req.body;

    // Check if already completed
    const existingActivity = await ActivityProgress.findOne({
      child,
      activityName,
    });

    if (existingActivity) {
      return res.status(200).json(existingActivity);
    }

    const activity = await ActivityProgress.create({
      child,
      activityName,
      completed: true,
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all completed activities of a child
const getActivityProgress = async (req, res) => {
  try {
    const { child } = req.params;

    const activities = await ActivityProgress.find({
      child,
    });

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  saveActivityProgress,
  getActivityProgress,
};