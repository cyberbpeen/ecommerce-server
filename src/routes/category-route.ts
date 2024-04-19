import { Router } from "express";
import {
  addCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category";

const router = Router();

router.post("", addCategory);
router.get("/:id", getCategoryById);
router.get("", getAllCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
