const User = require("../models/userModel");

async function usersController(req, res) {
  const { id } = req.query;
  const users = await User.find({});
  res.send({ query: id, data: users });
}

module.exports = usersController;
