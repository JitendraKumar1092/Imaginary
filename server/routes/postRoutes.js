import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import {Post} from "../mongodb/models/post.js";

const router = express.Router();
dotenv.config();
export default router;
