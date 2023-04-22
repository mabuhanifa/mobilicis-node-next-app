const usersServices = require("../services/usersServices");

async function usersController(req, res) {
  try {
    const { id } = req.query;
    const users = await usersServices();
    res.send({ query: id, data: users });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't create the brand",
    });
  }
}

module.exports = usersController;
