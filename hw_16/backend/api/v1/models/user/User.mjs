import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be at least 3 chars long"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  role: {
    type: mongoose.Types.ObjectId,
    required: [true, "Role must be attached"],
    ref: "Role",
  },
})

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await this.model.hashPassword(this.password)
  }
  next()
})

userSchema.statics.hashPassword = async (password, saltRounds = 10) => {
  return await bcrypt.hash(password, saltRounds)
}

export default mongoose.model("User", userSchema)
