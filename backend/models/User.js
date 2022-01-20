const usersCollection = require('../db').collection('users');
const bcrypt = require('bcryptjs');
const validator = require('validator');

let User = function (data) {
	this.data = data;
	this.errors = [];
};

User.prototype.cleanUp = function () {
	if (typeof this.data.username !== 'string') {
		console.log('Cleaning username');
		this.data.username = '';
	}
	if (typeof this.data.email !== 'string') {
		this.data.email = '';
	}
	if (typeof this.data.password !== 'string') {
		this.data.password = '';
	}

	this.data = {
		username: this.data.username.trim().toLowerCase(),
		email: this.data.email.trim().toLowerCase(),
		password: this.data.password,
	};
};

User.prototype.validate = function () {
	if (this.data.username === '') {
		this.errors.push('Please provide a username');
	}
	if (
		this.data.username !== '' &&
		!validator.isAlphanumeric(this.data.username)
	) {
		this.errors.push('Username must only contains letters and numbers');
	}
	if (this.data.username.length > 0 && this.data.username.length < 3) {
		this.errors.push('Please enter at least 3 characters');
	}
	if (this.data.username.length > 30) {
		this.errors.push('Username cannot exceed 30 characters');
	}
	if (!validator.isEmail(this.data.email)) {
		this.errors.push('Please provide a valid email');
	}
	if (this.data.password === '') {
		this.errors.push('Please provide a password');
	}
	if (this.data.password.length > 0 && this.data.password.length < 6) {
		this.errors.push('Password must be at least 6 characters');
	}
	if (this.data.password.length > 50) {
		this.errors.push('Password cannot exceed 50 characters');
	}
};

User.prototype.login = function () {
	return new Promise((resolve, reject) => {
		this.cleanUp();
		this.validate();
		usersCollection
			.findOne({ username: this.data.username })
			.then((attemptedUser) => {
				if (
					attemptedUser &&
					bcrypt.compareSync(this.data.password, attemptedUser.password)
				) {
					resolve(attemptedUser);
				} else {
					reject('Invalid Username / Password');
				}
			})
			.catch((error) => {
				reject('Please try again later');
			});
	});
};

User.prototype.register = function () {
	this.cleanUp();
	this.validate();

	if (!this.errors.length) {
		const salt = bcrypt.genSaltSync(10);
		this.data.password = bcrypt.hashSync(this.data.password, salt);
		usersCollection.insertOne(this.data);
	}
};

module.exports = User;
