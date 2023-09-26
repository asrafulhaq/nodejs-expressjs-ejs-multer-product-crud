import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  showProductPage,
  showCreateProductPage,
  showSingleProductPage,
  showEditProductPage,
  updateProduct,
} from "../controllers/productController.js";
import { createProductMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// EJS Route
router.get("/", showProductPage);
router.get("/create", showCreateProductPage);
router.get("/single/:slug", showSingleProductPage);
router.get("/edit/:id", showEditProductPage);
router.post("/update/:id", createProductMulter, updateProduct);

// api Route
router.get("/product", getAllProduct);
router.get("/product/:slug", getSingleProduct);
router.get("/product-delete/:id", deleteProduct);
router.post("/product", createProductMulter, createProduct);

// export router
export default router;
