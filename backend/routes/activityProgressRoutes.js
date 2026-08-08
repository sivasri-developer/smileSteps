import express from "express";

import {
  saveActivityProgress,
  getActivityProgress,
} from "../controllers/activityProgressController.js";

const router = express.Router();

// Save completed activity
router.post("/", saveActivityProgress);

// Get completed activities of a child
router.get("/:child", getActivityProgress);

export default router;