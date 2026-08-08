import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import childRoutes from "./routes/childRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import activityProgressRoutes from "./routes/activityProgressRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 SmileSteps Backend Running...");
});

// API Routes
app.use("/api/children", childRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/activity-progress", activityProgressRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});