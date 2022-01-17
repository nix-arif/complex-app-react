const usersCollection = require('../db').collection('users');
const bcrypt = require('bcryptjs');
const validator = require('validator');

let User = function (data) {
	this.data = data;
	this.errors = [];
};

User.prototype.cleanUp = function () {
	if (this.data.username !== 'string') {
		this.data.username = '';
	}
	if (this.data.email !== 'string') {
		this.data.email = '';
	}
	if (this.data.password !== 'string') {
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
	if (!validator.isEmail(this.data.email)) {
		this.errors.push('Please provide a valid email');
	}
	if (this.data.password === '') {
		this.errors.push('Please provide a password');
	}
	if (this.data.username.length > 0 && this.data.username.length < 3) {
		this.errors.push('Please enter at least 3 characters');
	}
	if (!validator.isAlphaNumeric(this.data.username)) {
		this.errors.push('Username must only contains letters and numbers');
	}
	if (this.data.password.length > 0 && this.data.password < 6) {
		this.errors.push('Password must be at least 6 characters');
	}
};

User.prototype.register = function () {
	this.cleanUp();
	this.validate();
	usersCollection.insertOne(this.data);
};

module.exports = User;
