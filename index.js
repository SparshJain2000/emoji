const data = require('./data/emojis.json');

const EmojiByName = (x) => {
	const emoji = data.emojis.find((obj) => obj.name === x);
	if (emoji) return emoji;
	return undefined;
};
const RandomEmoji = () => {
	const n = Math.floor(Math.random() * data.emojis.length);
	const emoji = data.emojis[n];
	if (emoji) return emoji;
	return undefined;
};
module.exports = { EmojiByName, RandomEmoji };
