const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   title: String
}
)

const TodoModel = mongoose.models("user", userSchema)

module.exports = TodoModel