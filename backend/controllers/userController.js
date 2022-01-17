const User = require('../models/User');

exports.login = (req, res) => {};
exports.logout = (req, res) => {};

exports.register = (req, res) => {
	let user = new User(req.body);
	user.register();

	if (!user.errors.length) {
		res.json('Good Job');
	} else {
		res.json(user.errors);
	}
};

exports.home = (req, res) => {};
