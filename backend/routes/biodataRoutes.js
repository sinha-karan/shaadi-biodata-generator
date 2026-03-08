import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBiodata ,getAllBiodata, getSingleBiodata, updateBiodata, deleteBiodata} from "../controllers/biodataController.js"

const router = express.Router();

router.use(authMiddleware)

router.post("/", createBiodata);

router.get("/", getAllBiodata);

router.get("/:id", getSingleBiodata);

router.put("/:id", updateBiodata);

router.delete("/:id", deleteBiodata);

export default router;