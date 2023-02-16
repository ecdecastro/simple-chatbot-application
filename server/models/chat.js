const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  message: String,
});

const ChatHistory = mongoose.model("ChatHistory", chatSchema);

module.exports = ChatHistory;
