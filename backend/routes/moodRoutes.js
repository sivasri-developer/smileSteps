import express from "express";

import {
  saveMood,
  getLatestMood,
} from "../controllers/moodController.js";

const router = express.Router();

// Save mood
router.post("/", saveMood);

// Get latest mood
router.get("/:childId", getLatestMood);

export default router;