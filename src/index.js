import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" }); // Correct dotenv usage

const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        console.log("Database connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

startServer();

// Instead of `app.listen()`, export the app for Vercel
export default app;
