const User = require("../models/userModel");

async function usersServices() {
  const users = await User.find({});
  return users;
}

module.exports = usersServices;
