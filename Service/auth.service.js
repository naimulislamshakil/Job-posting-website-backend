const USER = require('../Schema/singup.schema');

exports.singupService = async (data) => {
	const user = await USER.create(data);
	return user;
};
