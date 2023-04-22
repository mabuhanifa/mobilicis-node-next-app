const User = require("../models/userModel");

async function usersServices({ car, income, gender, phone_price }) {
  const users = await User.where("car")
    .equals(car)
    .where("income")
    .lt(`$${income}`)
    .where("gender")
    .equals(gender)
    .where("phone_price")
    .gt(phone_price);
  return users;
}

module.exports = usersServices;
