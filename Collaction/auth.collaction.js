const { tryCatch } = require('../Utils/tryCatch');
const AuthService = require('../Service/auth.service');
const AppError = require('../Utils/AppError');
const { USER_NOT_FOUND } = require('../constants/errorCode');

exports.singupCollaction = tryCatch(async (req, res) => {
	const { Email } = req.body;

	const user = await AuthService.findUser(Email);

	if (user) {
		throw new AppError(
			USER_NOT_FOUND,
			'User Already Have An Account. Pleace Login.',
			USER_NOT_FOUND
		);
	}
	const createUser = await AuthService.singupService(req.body);
	res.status(200).json({
		success: true,
		status: 200,
		message: 'Usae Create Successfully...',
	});
});
