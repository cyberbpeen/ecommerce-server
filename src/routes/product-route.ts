import { Router } from "express";
import {
  addProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product";

const router = Router();

router.post("", addProduct);
router.get("/:id", getProductById);
router.get("", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
