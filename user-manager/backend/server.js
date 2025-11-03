import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userroutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Direct MongoDB connection (no .env)
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Database Connection Error:", err));

// Server setup
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
