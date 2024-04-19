import { Router } from "express";
import userRoute from "./user-route";
import productRoute from "./product-route";
import brandRoute from "./brand-route";
import categoryRoute from "./category-route";

const router = Router();

// Root Route
router.get("/", (req, res) => {
  return res.status(200).json("Hello From Server Side.");
});

// User Routes
router.use("", userRoute);

// Products Routes
router.use("/products", productRoute);

// Categories Routes
router.use("/categories", categoryRoute);

// Brands Routes
router.use("/brands", brandRoute);

export default router;
