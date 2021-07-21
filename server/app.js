const express = require('express');
const bodyParser = require('body-parser');
const { googleCatHunter } = require('./bin/crawler');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello Cats!');
});

app.get('/cats', async (req, res) => {
	const cats = await googleCatHunter();
	console.log(cats);
	res.send(cats);
});

app.listen(port, () => {
	console.log(`cat_crawler server listening at http://localhost:${port}`);
});
