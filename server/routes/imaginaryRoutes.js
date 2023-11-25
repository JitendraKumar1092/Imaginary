import express from "express";
import * as dotenv from "dotenv";
import Replicate from "replicate";

dotenv.config();

const router = express.Router();

const replicate = new Replicate({
  auth: "r8_Kp09c3IVDGaflDQZlaXoVDM0HtKvQOu0ljTbh",
});
const model =
  "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
});

router.route("/").post(async (req, res) => {
  const input = req.body;
  const output = await replicate.run(model, { input });

  res.status(200).json({ photo: output });
});

export default router;
