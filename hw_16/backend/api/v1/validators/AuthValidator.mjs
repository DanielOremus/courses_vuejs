import UserManager from "../models/user/UserManager.mjs"

class AuthValidator {
  static registerSchema = {
    name: {
      trim: true,
      escape: true,
      notEmpty: {
        errorMessage: "Name is required",
        bail: true,
      },
      isLength: {
        options: {
          min: 3,
          max: 20,
        },
        errorMessage: "Name must be between 3 and 30 chars",
      },
    },
    email: {
      trim: true,
      notEmpty: {
        errorMessage: "Email is required",
        bail: true,
      },
      isEmail: {
        errorMessage: "Invalid email format",
        bail: true,
      },
      custom: {
        options: async (value) => {
          const alreadyInUse = await UserManager.getOne({
            email: value.toLowerCase(),
          })

          if (alreadyInUse) {
            throw new Error("This email is already in use")
          }
        },
      },
    },
    password: {
      trim: true,
      notEmpty: {
        errorMessage: "Password is required",
        bail: true,
      },
      isLength: {
        options: {
          min: 3,
          max: 100,
        },
        errorMessage: "Password must be between 3 and 100 chars",
      },
    },
  }
  static loginSchema = {
    email: {
      trim: true,
      notEmpty: {
        errorMessage: "Email is required",
      },
    },
    password: {
      trim: true,
      notEmpty: {
        errorMessage: "Password is required",
      },
    },
  }
}

export default AuthValidator
