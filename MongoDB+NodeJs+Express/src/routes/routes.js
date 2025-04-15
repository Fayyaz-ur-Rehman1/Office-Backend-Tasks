import express from "express"
import { getAllUser, createUser, UpdateUser, deleteUser } from "../controllers/controllers.js";
const router = express.Router();

router.get('/', getAllUser);
router.post("/", createUser);
router.put("/:id", UpdateUser);
router.delete("/:id", deleteUser);

export default router;