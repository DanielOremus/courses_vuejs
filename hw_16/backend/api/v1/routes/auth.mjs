import { Router } from "express"
import UserController from "../controllers/UserController.mjs"
import { checkSchema } from "express-validator"
import AuthValidator from "../validators/AuthValidator.mjs"

const router = Router()

router.post(
  "/register",
  checkSchema(AuthValidator.registerSchema),
  UserController.register
)
router.post(
  "/login",
  checkSchema(AuthValidator.loginSchema),
  UserController.login
)

export default router
