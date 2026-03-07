import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";

import userRoutes from "@routes/UserRoutes";
import connectDB from "@config/db";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const allowedOrigins = [
    process.env.TESTING_FE_DOMAIN,
    process.env.DEPLOYED_FE_DOMAIN,
  ].filter((origin): origin is string => Boolean(origin));

  app.use(
    cors({
      origin: allowedOrigins,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    }),
  );

  app.use(express.json());

  app.use("/api/users", userRoutes);

  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Server is responding" });
  });

  app.get("/vibe-check", (req: Request, res: Response) => {
    return res.status(200).json({ message: "I am in the vibe!" });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();
