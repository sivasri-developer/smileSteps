import mongoose from "mongoose";
import dotenv from "dotenv";
import Child from "./models/Child.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log("✅ MongoDB Connected");

await Child.deleteMany();

await Child.insertMany([
  {
    name: "Aarav",
    photo: "https://i.pravatar.cc/200?img=1",
    className: "LKG-A",
  },
  {
    name: "Ananya",
    photo: "https://i.pravatar.cc/200?img=5",
    className: "LKG-A",
  },
  {
    name: "Rahul",
    photo: "https://i.pravatar.cc/200?img=12",
    className: "LKG-A",
  },
  {
    name: "Priya",
    photo: "https://i.pravatar.cc/200?img=32",
    className: "LKG-A",
  },
]);

console.log("🎉 Children Added Successfully");

await mongoose.disconnect();