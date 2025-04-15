import express  from "express";
import { getUser, createUser ,loggedInUser} from "../controllers/controllers.js";
import validateCreateUser from "../middleware/validationMiddleware.js";
const router = express.Router();

router.get("/", getUser);
router.post("/signup",validateCreateUser,createUser);
router.post("/login",loggedInUser)

export default router;