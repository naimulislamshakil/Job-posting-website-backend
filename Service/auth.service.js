const USER = require('../Schema/singup.schema');

exports.singupService = async (data) => {
	const user = await USER.create(data);
	return user;
};

exports.findUser = async (Email) => {
	const user = await USER.find({ Email });
	return user;
};
