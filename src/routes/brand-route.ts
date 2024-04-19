import { Router } from "express";

import {
  addBrand,
  getBrandById,
  getAllBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brand";

const router = Router();

router.post("", addBrand);
router.get("/:id", getBrandById);
router.get("", getAllBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

export default router;
