const { tryCatch } = require('../Utils/tryCatch');
const AuthService = require('../Service/auth.service');

exports.singupCollaction = tryCatch(async (req, res) => {
	const user = await AuthService.singupService(req.body);
	res.status(200).json({
		success: true,
		status: 200,
		message: 'Usae Create Successfully...',
	});
});
