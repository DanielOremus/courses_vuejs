import User from "./User.mjs"
import MongooseCRUDManager from "../MongooseCRUDManager.mjs"
import RoleManager from "../role/RoleManager.mjs"
class UserManager extends MongooseCRUDManager {
  async create(userData) {
    try {
      const defaultRole = await RoleManager.getOne({ name: "User" })
      return await super.create({ userData, role: defaultRole._id })
    } catch (error) {
      throw new Error("Error creating user: " + error.message)
    }
  }
}

export default new UserManager(User)
