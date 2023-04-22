const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
