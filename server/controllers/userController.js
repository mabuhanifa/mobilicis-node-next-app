const User = require("../models/userModel");

async function getAllUsers(req, res) {
  const users = await User.find({});
  res.send(users);
}

module.exports = getAllUsers;