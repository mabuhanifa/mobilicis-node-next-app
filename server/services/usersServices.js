const User = require("../models/userModel");

async function usersServices({ car, income, gender }) {
  const users = await User.where("car")
    .equals(car)
    .where("income")
    .lt(`$${income}`)
    .where();
  return users;
}

module.exports = usersServices;
