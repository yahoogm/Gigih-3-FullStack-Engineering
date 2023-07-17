import express from "express";
import { addSong, getDetailSong, getSongs } from "../controllers/songs.js";

const router = express.Router();

router.get("/", getSongs);
router.get("/:id", getDetailSong);
router.post("/", addSong);

export default router;
