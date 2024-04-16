import { Router } from "express";
import {
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

// Brand Routes
router.post("/categories", addCategory);
router.get("/categories/:id", getCategoryById);
router.get("/categories", getAllCategories);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// Brand Routes
router.post("/brands", addBrand);
router.get("/brands/:id", getBrandById);
router.get("/brands", getAllBrand);
router.put("/brands/:id", updateBrand);
router.delete("/brands/:id", deleteBrand);

export default router;
