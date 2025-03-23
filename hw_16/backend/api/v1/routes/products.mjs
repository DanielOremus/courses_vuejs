import { Router } from "express"
import ProductController from "../controllers/ProductController.mjs"
import upload from "../../../middlewares/multer.mjs"
import { checkSchema } from "express-validator"
import ProductValidator from "../validators/ProductValidator.mjs"
import { checkIdFormat } from "../../../middlewares/checkIdFormat.mjs"
import {
  ensureAuthenticated,
  getPermissionChecker,
} from "../../../middlewares/auth.mjs"

const router = Router()

const checkPermission = getPermissionChecker("products")

router.get("/", ProductController.fetchProductsWithQuery)

router.get(
  "/:id",
  checkIdFormat("id", "params"),
  ProductController.fetchProductById
)

router.post(
  "/",
  upload.single("image"),
  ensureAuthenticated,
  checkPermission("create"),
  checkSchema(ProductValidator.defaultSchema),
  ProductController.createOrUpdateProduct
)

router.put(
  "/:id",
  upload.single("image"),
  ensureAuthenticated,
  checkPermission("update"),
  checkIdFormat("id", "params"),
  checkSchema(ProductValidator.defaultSchema),
  ProductController.createOrUpdateProduct
)

router.delete(
  "/",
  ensureAuthenticated,
  checkPermission("delete"),
  checkIdFormat("id", "body"),
  ProductController.deleteProduct
)

export default router
