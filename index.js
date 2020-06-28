const data = require('./data/emojis.json');

const EmojiByName = (name) => {
	const emoji = data.emojis.find((obj) => obj.name.toLowerCase() === name.toLowerCase());
	if (emoji) return emoji.content;
	return undefined;
};
const RandomEmoji = () => {
	const n = Math.floor(Math.random() * data.emojis.length);
	const emoji = data.emojis[n];
	if (emoji) return emoji.content;
	return undefined;
};
const RandomEmojiByType = (type) => {
	const emojiByTypes=data.emojis.filter((obj)=>obj.type.toLowerCase()===type.toLowerCase());
	const n = Math.floor(Math.random() * emojiByTypes.length);
	const emoji = emojiByTypes[n];
	if (emoji) return emoji;
	return undefined;
};
module.exports = { EmojiByName, RandomEmoji ,RandomEmojiByType};