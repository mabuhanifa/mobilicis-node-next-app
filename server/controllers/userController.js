const usersServices = require("../services/usersServices");

async function usersController(req, res) {
  const { id } = req.query;
  const users = await usersServices();
  res.send({ query: id, data: users });
}

module.exports = usersController;
