const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Cats!');
});

app.get('/cats', (req, res) => {
	res.send('cats');
});

app.listen(port, () => {
	console.log(`cat_crawler server listening at http://localhost:${port}`);
});
