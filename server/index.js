const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json({ limit: "100kb" }));

app.use(cors());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to CHATAPP");
});

CONNECTION_URL =
  "mongodb+srv://ecdecastro:123465@cluster0.xh6kwhv.mongodb.net/chatbot?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL)
  .then(console.log(" Connectionto database has been successful"))
  .catch((err) => {
    console.error("Error connecting to MongoDB database", err);
  });

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
