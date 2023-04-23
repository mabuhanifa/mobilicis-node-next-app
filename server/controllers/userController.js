const usersServices = require("../services/usersServices");

async function usersController(req, res) {
  try {
    
    const users = await usersServices(4);
    res.send({length: users.length, data: users });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't find users",
    });
  }
}

module.exports = usersController;
