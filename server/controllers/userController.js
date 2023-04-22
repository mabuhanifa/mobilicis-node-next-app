const User = require("../models/userModel");

async function getAllUsers(req, res) {
  const { id } = req.query;
  const users = await User.find({ id: id });
  res.send({ query: id, data: users });
}

module.exports = getAllUsers;
