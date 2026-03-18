import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import userRoutes from "./routes/user.js";
import searchRoutes from "./routes/search.js";
import aiRoutes from "./routes/ai.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Endpoints
app.use("/api/users", userRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
