const data = require('./data/emojis.json');

const emojiByName = (name) => {
	const emoji = data.emojis.find((obj) => obj.name.toLowerCase() === name.toLowerCase());
	if (emoji) return emoji;
	throw new Error('No such emoji found');
};
const randomEmoji = () => {
	const n = Math.floor(Math.random() * data.emojis.length);
	const emoji = data.emojis[n];
	if (emoji) return emoji;
	return undefined;
};
const randomEmojiByType = (type) => {
	const emojiByTypes=data.emojis.filter((obj)=>obj.type.toLowerCase()===type.toLowerCase());
	const n = Math.floor(Math.random() * emojiByTypes.length);
	const emoji = emojiByTypes[n];
	if (emoji) return emoji;
	throw new Error('Invalid emoji type');
};
const emojiByType = (type) => {
	const emojis=data.emojis.filter((obj)=>obj.type.toLowerCase()===type.toLowerCase());
	if (emojis) return emojis;
	throw new Error('Invalid emoji type');
};
module.exports = { emojiByName, randomEmoji ,randomEmojiByType, emojiByType};