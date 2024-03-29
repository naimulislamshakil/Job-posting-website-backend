const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const singupSchema = mongoose.Schema(
	{
		First_Name: {
			type: String,
			required: true,
			trim: true,
		},
		Last_Name: {
			type: String,
			required: true,
			trim: true,
		},
		Email: {
			type: String,
			trim: true,
		},
		Position: {
			type: String,
		},
		Country_Code: {
			type: String,
		},
		Password: {
			type: String,
			required: true,
			trim: true,
		},
		Number: {
			type: String,
		},
		Company_Name: {
			type: String,
		},
		Industry: {
			type: String,
		},
		Employees: {
			type: String,
		},
		EmployerType: {
			type: String,
		},
		Website: {
			type: String,
		},
		HearUs: {
			type: String,
		},
		Contact_Person: {
			type: String,
		},
		Notification_Email: {
			type: String,
		},
		Cuntry: {
			type: String,
		},
		Address: {
			type: String,
		},
		Phone_Number: {
			type: String,
		},
		CountryCode: {
			type: String,
		},
		Days: {
			type: String,
		},
		Months: {
			type: String,
		},
		Years: {
			type: String,
		},
		Gender: {
			type: String,
		},
		Nationality: {
			type: String,
		},
		Location: {
			type: String,
		},
		Qualification: {
			type: String,
		},
		Experience: {
			type: String,
		},
		Job_Function: {
			type: String,
		},
		Availability: {
			type: String,
		},
		Desired_Job_Function: [],
		Resume: {
			type: String,
		},
	},
	{ timestamps: true }
);

singupSchema.pre('save', function (next) {
	if (!this.isModified('Password')) return next();

	const password = this.Password;
	const hashPassword = bcrypt.hashSync(password, 10);
	this.Password = hashPassword;
	next();
});

const USER = mongoose.model('User', singupSchema);

module.exports = USER;
