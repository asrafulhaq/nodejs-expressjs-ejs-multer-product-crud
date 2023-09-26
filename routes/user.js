import express from "express";
import {
  createUser,
  getAllUser,
  registerUser,
} from "../controllers/userController.js";
import { createUserMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// create route
router.post("/user", createUserMulter, createUser);

router.get("/user", getAllUser);
router.post("/register", registerUser);

// export router
export default router;
