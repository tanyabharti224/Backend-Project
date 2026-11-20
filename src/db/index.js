import dns from "node:dns";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME,
    });

    console.log("MongoDB connected successfully!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is listening on port ${process.env.PORT || 3000}`);
    });

  } catch (error) {
    console.error("ERROR:", error);
    process.exit(1);
  }
})();