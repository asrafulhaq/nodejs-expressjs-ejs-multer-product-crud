import express from "express";
import { createStudent } from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// student route
router.post("/student", createStudentMulter, createStudent);

// export default router
export default router;
