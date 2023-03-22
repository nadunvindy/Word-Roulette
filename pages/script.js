const gameresult = document.querySelector(".gameresult");
const button = document.querySelector("#guessbutton");
const result = document.querySelector(".result");

let guessword = "Yourmom";
let wordguessed;
let resultext = [];
let correct = 0;

button.addEventListener("click", () => {
  resultext = [];
  wordguessed = document.getElementById("userword").value.toUpperCase();
  console.log(wordguessed);
  if (wordguessed.length > guessword.length) {
    result.textContent = "Word guessed is too long";
  } else if (wordguessed.length < guessword.length) {
    result.textContent = "Word guessed is too short";
  } else {
    for (let i = 0; i < guessword.length; i++) {
      if (guessword[i] == wordguessed[i]) {
        resultext.push("Correct Letter\n");
        correct++;
      } else if (guessword[i] != wordguessed[i]) {
        resultext.push("Incorrect Letter\n");
      }
    }
    if (correct == guessword.length) {
      result.textContent = "Correct Word";
    } else {
      result.textContent = resultext;
    }
  }
});
