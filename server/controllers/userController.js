const usersServices = require("../services/usersServices");

async function usersController(req, res) {
  try {
    const query = req.query;
    const users = await usersServices(query);
    res.send({ query: query, data: users });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't find users",
    });
  }
}

module.exports = usersController;
