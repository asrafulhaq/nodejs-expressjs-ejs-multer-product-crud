import express from "express";
import { createStaff } from "../controllers/staffController.js";
import { createStaffrMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// staff routes
router.post("/staff", createStaffrMulter, createStaff);

// export default router
export default router;
