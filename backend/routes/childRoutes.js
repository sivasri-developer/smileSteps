import express from "express";

import {
  getChildren,
  getChildById,
} from "../controllers/childController.js";

const router = express.Router();

// Get all children
router.get("/", getChildren);

// Get one child
router.get("/:id", getChildById);

export default router;