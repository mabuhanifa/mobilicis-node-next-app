const User = require("../models/userModel");

async function usersServices(car) {
  const users = await User.find({ car: car });
  return users;
}

module.exports = usersServices;
