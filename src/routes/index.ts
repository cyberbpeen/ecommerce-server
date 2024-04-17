import { Router } from "express";
import {
  addProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
  addBrand,
  getBrandById,
  getAllBrand,
  updateBrand,
  deleteBrand,
} from "../controllers";

const router = Router();

// Root Route
router.get("/", (req, res) => {
  return res.status(200).json("Hello From Server Side.");
});

// Products Routes
router.post("/products", addProduct);
router.get("/products/:id", getProductById);
router.get("/products", getAllProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Categories Routes
router.post("/categories", addCategory);
router.get("/categories/:id", getCategoryById);
router.get("/categories", getAllCategories);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// Brands Routes
router.post("/brands", addBrand);
router.get("/brands/:id", getBrandById);
router.get("/brands", getAllBrand);
router.put("/brands/:id", updateBrand);
router.delete("/brands/:id", deleteBrand);

export default router;
