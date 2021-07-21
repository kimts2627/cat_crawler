const cheerio = require('cheerio');
const axios = require('axios');

const google = 'https://google.com';

const requestCat = async (requestUrl) => {
	const res = await axios.get(requestUrl);
	return res;
};

exports.googleCatHunter = async () => {
	const keyword = encodeURIComponent('cat meme');
	let url = `${google}/search?q=${keyword}&tbm=isch&tbs=qdr:y`;
	const res = await requestCat(url);
	return res.data;
};
