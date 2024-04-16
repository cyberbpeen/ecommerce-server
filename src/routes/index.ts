import { Router } from "express";

const router = Router();

// Root Route
router.get("/", (req, res) => {
  return res.status(200).json("Hello From Server Side.");
});

export default router;
