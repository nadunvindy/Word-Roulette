const gameresult = document.querySelector(".gameresult");
const button = document.querySelector("#guessbutton");
const result = document.querySelector(".result");
const hintinfo = document.querySelector(".hintinfo");
const tryinfo = document.querySelector(".tryinfo");

const words = [
  "APPLE",
  "BEACH",
  "CHARM",
  "DREAM",
  "ENJOY",
  "FLOUR",
  "GRAPE",
  "HAPPY",
  "IGLOO",
  "JOLLY",
];

const hints = [
  "A fruit that is often red or green",
  "A sandy area near the ocean or lake",
  "A quality that attracts others",
  "A series of thoughts, images, and sensations occurring in a person's mind during sleep",
  "To take pleasure in something",
  "A powder made by grinding grains, beans, or other food substances",
  "A small, juicy fruit with a smooth skin, typically purple or green",
  "Feeling or showing pleasure or contentment",
  "A dome-shaped Inuit house, typically built of blocks of solid snow",
  "Full of fun and good cheer",
];

let resultext = [];
let randomIndex = Math.floor(Math.random() * words.length);
// Use the random index to select a random word from the array
let randomWord = words[randomIndex];
let randomHint = hints[randomIndex];

console.log(randomWord);

let tries = 0;

tryinfo.textContent = tries;

hintinfo.textContent = randomHint;

function reset() {
  randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  randomHint = hints[randomIndex];
  hintinfo.textContent = randomHint;
  tries = 0;
  tryinfo.textContent = tries;
}

function wordle(guessword, targetword) {
  resultext = [];
  let correctLetters = 0;
  result.textContent = resultext;
  if (guessword.length > 5 || guessword.length < 5) {
    resultext = "Incorrect Word Length";
    result.textContent = resultext;
  } else
    for (let i = 0; i < 5; i++) {
      if (i == 0) {
        let ind = -1;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j]) {
            ind = j;
          }
        }
        if (i == ind) {
          resultext.push("1.Correct Letter");
          correctLetters++;
        } else if (i != ind && ind != -1) {
          resultext.push("1.Correct Letter in incorrect position");
        } else if (i != ind && ind == -1) {
          resultext.push("1.Incorrect Letter ");
        }
      } else if (i == 1) {
        let ind = -1;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j]) {
            ind = j;
          }
        }
        if (i == ind) {
          resultext.push("2.Correct Letter");
          correctLetters++;
        } else if (i != ind && ind != -1) {
          resultext.push("2.Correct Letter in incorrect position");
        } else if (i != ind && ind == -1) {
          resultext.push("2.Incorrect Letter ");
        }
      } else if (i == 2) {
        let ind = -1;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j]) {
            ind = j;
          }
        }
        if (i == ind) {
          resultext.push("3.Correct Letter");
          correctLetters++;
        } else if (i != ind && ind != -1) {
          resultext.push("3.Correct Letter in incorrect position");
        } else if (i != ind && ind == -1) {
          resultext.push("3.Incorrect Letter ");
        }
      } else if (i == 3) {
        let ind = -1;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j]) {
            ind = j;
          }
        }
        if (i == ind) {
          resultext.push("4.Correct Letter");
          correctLetters++;
        } else if (i != ind && ind != -1) {
          resultext.push("4.Correct Letter in incorrect position");
        } else if (i != ind && ind == -1) {
          resultext.push("4.Incorrect Letter ");
        }
      } else if (i == 4) {
        let ind = -1;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j]) {
            ind = j;
          }
        }
        if (i == ind) {
          resultext.push("5.Correct Letter");
          correctLetters++;
        } else if (i != ind && ind != -1) {
          resultext.push("5.Correct Letter in incorrect position");
        } else if (i != ind && ind == -1) {
          resultext.push("5.Incorrect Letter ");
        }
      }
    }
  tries++;
  if (tries > 4) {
    reset();
  }
  tryinfo.textContent = tries;
  if (correctLetters == 5) {
    result.textContent = "Correct Word";
    reset();
  } else result.textContent = resultext;
}

button.addEventListener("click", () => {
  let wordguessed = document.getElementById("userword").value.toUpperCase();
  console.log(wordguessed);
  wordle(wordguessed, randomWord);
});
