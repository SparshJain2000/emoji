# Emoji
#### A simple NPM package which returns emoji by name, random emoji of the given type and a random emoji .
![npm (scoped)](https://img.shields.io/npm/v/@sparshjain/emoji?logo=npm&style=for-the-badge)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@sparshjain/emoji/2.1.0?style=for-the-badge)
![npm collaborators](https://img.shields.io/npm/collaborators/@sparshjain/emoji?logo=npm&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@sparshjain/emoji?logo=github&style=for-the-badge)

## Installation

- Download and install [NodeJS](https://nodejs.org/en/download/)
- Install the package using npm install
```bash
$ npm install @sparshjain/emoji
```

## Usage
- **emojiByName( name : String )** returns the emoji of the corresponding ***name***.
- **randomEmojiByType( type : String )** returns a random emoji of the corresponding ***type***.
- **emojiByType( type : String )** returns array of emoji of the corresponding ***type***.
- **randomEmoji()** returns a random emoji .
- Emoji object :
```
  {
      "name"    : "tears of joy",
      "content" : "😂",
      "type"    : "smiley"
  }
```

## Example
- Install the package as described above .
```js
const {emojiByName,randomEmoji,randomEmojiByType, emojiByType} = require('@sparshjain/emoji');
console.log(emojiByName('SMILING FACE'));
console.log(randomEmojiByType('activities'));
console.log(emojiByType('food'));
console.log(randomEmoji());
```
```or```
- Clone the repo and run test.js file
```bash
$ git clone https://github.com/SparshJain2000/emoji.git
$ cd emoji
$ node test.js
```
## Contributing

🍴 Fork the repository

📝 Change it / add your code 

✔️ Do a "pull request"

## License

**MIT &copy; [Sparsh Jain](https://github.com/SparshJain2000/emoji/blob/master/LICENSE)**

## Support
Give a 🌟 to this repo if you liked it.

Connect with me

[![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@sparsh._jain&color=grey&logo=instagram&style=for-the-badge&logoColor=white&colorA=critical)](https://www.instagram.com/sparsh._jain/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@SparshJain&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/sparsh-jain-87379a168/) [![Github](https://img.shields.io/static/v1.svg?label=follow&message=@SparshJain2000&color=grey&logo=github&style=for-the-badge&logoColor=white&colorA=black)](https://www.github.com/SparshJain2000/)

