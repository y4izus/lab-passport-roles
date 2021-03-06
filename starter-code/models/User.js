const mongoose = require("mongoose")
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  name: String,
  familyName: String,
  password: String,
  role: {
    type: String,
    enum : ['Boss', 'Developer', 'TA'],
    default : 'Developer'
  }
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})


module.exports = mongoose.model("User", userSchema)
