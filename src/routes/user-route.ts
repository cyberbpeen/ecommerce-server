import { Router } from "express";
import {
  changePassword,
  createNewUser,
  deleteUser,
  getUser,
  login,
  updateUser,
} from "../controllers/user";
import isAuthenticated from "../middleware/auth";

const router = Router();

router.post("/auth/register", createNewUser);
router.post("/auth/login", login);
// Check whether user is authenticated
router.get("/user/details", isAuthenticated, getUser);
router.put("/user/:id", isAuthenticated, updateUser);
router.put("/user/:id/change-password", isAuthenticated, changePassword);
router.delete("/user/:id", isAuthenticated, deleteUser);

export default router;
