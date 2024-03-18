const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const { tryCatch } = require('./Utils/tryCatch');
const errorHandler = require('./Utils/ErrorHandler');
const AuthRouter = require('./Routes/v1/auth.route');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose
	.connect('mongodb://localhost:27017', {})
	.then(() => console.log('Database is connected successfully'))
	.catch((e) => console.log(e));

app.get('/', (req, res) => {
	res.send('<h1>How are Your</h1>');
});

const getUser = () => undefined;

app.use('/', AuthRouter);

// app.use('*', (req, res, next) => {
// 	const { baseUrl } = req;

// 	res.send(`<h1>${baseUrl} Not Found!</h1>`);
// 	next(`${baseUrl} Not Found!`);
// });

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is runing port ${PORT}`);
});
