import Child from "../models/Child.js";
import Mood from "../models/Mood.js";
import ActivityProgress from "../models/ActivityProgress.js";

const getDashboard = async (req, res) => {
  try {
    const childId = req.params.childId;

    const child = await Child.findById(childId);

    const mood = await Mood.findOne({
      child: childId,
    }).sort({ createdAt: -1 });

    const activities = await ActivityProgress.find({
      child: childId,
    });

    res.json({
      child,
      mood,
      activities,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { getDashboard };