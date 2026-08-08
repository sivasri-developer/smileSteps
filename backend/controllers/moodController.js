import Mood from "../models/Mood.js";

// Save mood
const saveMood = async (req, res) => {
  try {
    const mood = new Mood(req.body);

    await mood.save();

    res.status(201).json(mood);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get latest mood of a child
const getLatestMood = async (req, res) => {
  try {
    const mood = await Mood.findOne({
      child: req.params.childId,
    }).sort({ createdAt: -1 });

    res.status(200).json(mood);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  saveMood,
  getLatestMood,
};