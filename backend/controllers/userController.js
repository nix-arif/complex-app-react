const User = require("../models/User");

exports.login = (req, res) => {};
exports.logout = (req, res) => {};

exports.register = (req, res) => {
  let user = new User(req.body);
  user.register();
  res.json(user);
};

exports.home = (req, res) => {};
