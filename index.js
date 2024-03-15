const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('<h1>How are Your</h1>');
});

app.use('*', (req, res, next) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
	next(`${baseUrl} Not Found!`);
});

app.listen(PORT, () => {
	console.log(`Server is runing port ${PORT}`);
});
