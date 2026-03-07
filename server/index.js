require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");

const app = express();
const port = process.env.PORT || 5000;

await connectDB();

const allowedOrigins = [
  process.env.TESTING_FE_DOMAIN,
  process.env.DEPLOYED_FE_DOMAIN,
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is responding" });
});

app.get("/vibe-check", (req, res) => {
  return res.status(200).json({ message: "I am in the vibe!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
