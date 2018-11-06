var wordBank = ["Cowboys", "Stars", "Mavericks", "Rangers"];
var random = Math.floor(Math.random()* wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;