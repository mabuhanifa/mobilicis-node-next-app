const usersServices = require("../services/usersServices");

async function usersController(req, res) {
  try {
    const { car } = req.query;
    const users = await usersServices(car);
    res.send({ query: car, data: users });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't find users",
    });
  }
}

module.exports = usersController;
