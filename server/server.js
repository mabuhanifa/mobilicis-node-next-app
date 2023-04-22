const express = require("express");
const cors = require("cors");
const db = require("./db");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
app.use(express.json());
app.use(cors());
dotenv.config();
db();

app.get("/users", async (req, res) => {
  res.send({
    data: JSON.stringify(),
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
