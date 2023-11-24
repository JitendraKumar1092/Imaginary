import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.get("/", async (req, res) => {
  res.send("hello from Imaginary");
});
const url =
  "mongodb+srv://joker:1234567890@cluster0.gyhebku.mongodb.net/?retryWrites=true&w=majority";
const startServer = async () => {
  try {
    connectDB(url);
    app.listen(8080, () => console.log("server has started on port 8080"));
  } catch (err) {
    console.log(err);
  }
};
startServer();