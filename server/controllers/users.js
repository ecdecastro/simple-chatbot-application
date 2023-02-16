const ChatHistory = require("../models/chat");
const User = require("../models/user");

exports.signup = async (req, res) => {
  const user = await ChatHistory.create(req.body);
  res.status(200).json({
    status: "Success! Account created",
    data: user,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ message: "Please provide email and password!" });
  }

  const user = await User.findOne({ email }).select("+password");

  res.json({ message: "Login Account" });
};

exports.postChat = async (req, res) => {
  try {
    const message = req.body;
    const chat = await ChatHistory.create(message);

    res.status(200).json({
      status: "success!",
      data: chat,
    });
  } catch (err) {
    res.send(404).json({ message: err.message });
  }
};

exports.getChat = async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find();
    console.log(chatHistory);

    res.status(200).json(chatHistory);
  } catch (err) {
    res.send(404).json({ message: err.message });
  }
};
