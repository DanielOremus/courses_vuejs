import { Router } from "express"
import UserController from "../controllers/UserController.mjs"
import { ensureAuthenticated } from "../../../middlewares/auth.mjs"
const router = Router()

router.get("/profile", ensureAuthenticated, UserController.fetchOwnProfile)

export default router
