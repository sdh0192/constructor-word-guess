//VARIABLES AND REQUIREMENTS
//------------------------------------------------------------------------------------
var inquirer = require("inquirer");
var wordLogic = require("./word.js");
var wordBank = require("./wordbank.js");



//MAIN OPERATION & LOGIC
//------------------------------------------------------------------------------------
var Dallas = {
    guessesleft: 10, 
    wordChosen: null,
    startGame: function(word){
        this.guessesLeft = 10;
        this.wordChosen = new wordLogic.wordLogic(wordBank);
        this.wordChosen.splitWord();
        console.log("result: " + this.wordChosen.wordGuessResult());
        console.log("\n");
        this.promptPlayer();
    }, 
    promptPlayer: function(){
        var referred = this;
        inquirer.prompt([
            {
                name: "guessPrompt",
                message: "Guess a letter"
            }
        ]).then(function(answer){
            if (this.lettersGuessed === undefined){
                this.lettersGuessed = answer.guessPrompt + ", ";
                
            } else {
                this.lettersGuessed += answer.guessPrompt.toString() + ", ";
            } 
            console.log(
                "-------------------------------------------------------------------"
              );
              var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
              console.log(
                "-------------------------------------------------------------------"
              );
      
              // wrong guess
              if (guessResult === 0) {
                console.log("May Michael Irvin favor your next guess!!");
                referred.guessesLeft -= 1;
              } else if (guessResult !== 0) {
                console.log("Woot!");
                console.log(
                  "-------------------------------------------------------------------"
                );
                // guessed word correctly.
                if (referred.wordChosen.checkWordGuess()) {
                  console.log(
                    "-------------------------------------------------------------------"
                  );
                  console.log("\n");
                  console.log("Answer: " + referred.wordChosen.word);
                  console.log("Whoa! Are you a son of Tony Romo?");
                  console.log("Can you guess the next one?!");
                  console.log("\n");
                  console.log(
                    "-------------------------------------------------------------------"
                  );
                  console.log(
                    "-------------------------------------------------------------------"
                  );
                  return;
                }
              }
      
              console.log(
                "-------------------------------------------------------------------"
              );
              console.log("\n");
              console.log("Guesses remaining: ", referred.guessesLeft);
              console.log("\n");
              console.log("Result: " + referred.wordChosen.wordGuessResult());
              console.log("\n");
              console.log("Letters guessed: " + this.lettersGuessed);
              console.log("\n");
              console.log(
                "-------------------------------------------------------------------"
              );
              // wrong guess on word, gives answer back
              if (referred.guessesLeft > 0 && referred.wordChosen.correct === false) {
                referred.promptPlayer();
                // accounts for letters guessed
              } else if (referred.guessesLeft === 0) {
                console.log("\n");
                console.log(
                  "Jerry Jones favors you, the word was: '" +
                    referred.wordChosen.word +
                    "'. Next time!"
                );
                console.log("\n");
                console.log(
                  "-------------------------------------------------------------------"
                );
              } else {
                console.log(referred.wordChosen.wordGuessResult());
                console.log(
                  "-------------------------------------------------------------------"
                );
              }
        })
    }
}

Dallas.startGame();