//VARIABLES/REQUIREMENTS
//------------------------------------------------------------------------------------
var letter = require("./letter.js");



//WORD CONSTRUCTOR
//------------------------------------------------------------------------------------
function wordLogic(currentWord) {
    this.word = currentWord;
    this.letterArray = [];
    this.correct = false;
    this.splitWord = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new letter.Letter(this.word[i]));
        };
    }
    this.checkWordGuess = function () {
        var letterRight = 0;
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].showLetter === true) {
                letterRight += 1;
            }
        }
        if (letterRight === this.letterArray.length) {
            this.correct = true;
        } else {
            this.correct = false;
        }
        return this.correct;
    }
    this.letterFound = function(guessPrompt){
        var numberFound = 0;
        for (var i = 0; i < this.letterArray.length; i++){
            if (this.letterArray[i].wordLetter === guessPrompt){
                this.letterArray[i].showLetter = true;
                numberFound += 1;
            };
        };
        return numberFound;
    };
    this.wordGuessResult = function(){
        var line = " ";
        for (var i = 0; i < this.letterArray.length; i++){
            line += this.letterArray[i].letterAppear();
        }
        return line;
    }
};







//EXPORTS
//------------------------------------------------------------------------------------
exports.wordLogic = wordLogic;