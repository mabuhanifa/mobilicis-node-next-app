const User = require("../models/userModel");

async function usersServices({
  car,
  income,
  gender,
  phone_price,
  last_name,
  quote,
}) {
  const lastName = new RegExp(last_name);
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
    {
      $match: {
        quote: { $exists: true },
        $expr: { $gt: [{ $strLenCP: "$quote" }, Number(quote)] },
      },
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
