const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config();
const app = express();

const userRoute = require("./routes/userRoute");

connectDB();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "https://infinity-craft-space-server.vercel.app/",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening ${PORT}`);
});
