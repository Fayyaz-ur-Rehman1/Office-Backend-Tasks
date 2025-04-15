import express from 'express';
import { getUsers, updateUserById, deleteUserById, createUser } from '../controllers/controller.js';
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;