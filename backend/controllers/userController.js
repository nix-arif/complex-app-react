const User = require('../models/User');

exports.login = (req, res) => {
	const user = new User(req.body);
	user
		.login()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((error) => {
			res.status(400).json(error);
		});
};

exports.logout = (req, res) => {};

exports.register = (req, res) => {
	let user = new User(req.body);
	user.register();
	res.json(user);
};

exports.home = (req, res) => {};
