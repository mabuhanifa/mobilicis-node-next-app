const User = require("../models/userModel");

async function usersServices({ car, income, gender, phone_price, last_name }) {
    const lastName = new RegExp(last_name)
  const users = await User.aggregate([
    // {
    //   $match: { car: car },
    // },
    // {
    //   $match: { income: { $lt: `$${income}` } },
    // },
    // {
    //   $match: { gender: gender },
    // },
    // {
    //   $match: { phone_price: { $gt: phone_price } },
    // },
    {
      $match: { last_name: { $regex: lastName } },
    },
  ]);
  //.where("car")
  // .equals(car)
  // .where("income")
  // .lt(`$${income}`)
  // .where("gender")
  // .equals(gender)
  // .where("phone_price")
  // .gt(phone_price);
  return users;
}

module.exports = usersServices;
