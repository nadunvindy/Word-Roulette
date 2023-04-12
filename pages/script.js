const gameresult = document.querySelector(".gameresult");
const button = document.querySelector("#guessbutton");
const result = document.querySelector(".result");
const hintinfo = document.querySelector(".hintinfo");
const tryinfo = document.querySelector(".tryinfo");

const words = [
  "apple",
  "blaze",
  "cheek",
  "dwarf",
  "eager",
  "flute",
  "grape",
  "hazel",
  "image",
  "jolly",
  "kneel",
  "lemon",
  "mango",
  "night",
  "olive",
  "peace",
  "queen",
  "river",
  "shake",
  "tiger",
  "uncle",
  "vapor",
  "waste",
  "xerox",
  "young",
  "zebra",
  "abuse",
  "bison",
  "clasp",
  "ditch",
];

const hints = [
  "A common fruit",
  "A very large fire",
  "The fleshy part of the face below the eye",
  "A short, stocky person",
  "Having or showing keen interest or enthusiasm",
  "A musical instrument",
  "A small juicy fruit",
  "A tree or shrub with nuts",
  "A representation of the external form of a person",
  "Full of high spirits and good humor",
  "Resting on one or both knees",
  "A citrus fruit",
  "A tropical fruit",
  "The period of darkness in each twenty-four hours",
  "A small, oval fruit with a hard pit and bitter flesh",
  "Freedom from disturbance; tranquility",
  "A woman who rules a country",
  "A large natural stream of water",
  "A hard or forceful shake or movement",
  "A large carnivorous feline",
  "The brother of one's father or mother",
  "A substance diffused or suspended in the air",
  "Use or expend carelessly or to no purpose",
  "A brand name for a copying machine",
  "Having lived or existed for only a short time",
  "A striped African mammal",
  "Treat with cruelty or violence",
  "A large, shaggy-haired mammal with horns",
  "A device with a interlocking mechanism",
  "A narrow channel dug in the ground",
];

let resultext = [];
let randomIndex = Math.floor(Math.random() * words.length);
// Use the random index to select a random word from the array
let randomWord = words[randomIndex].toUpperCase();
let randomHint = hints[randomIndex];

let isCorrect = [];

console.log(randomWord);

let tries = 0;

tryinfo.textContent = tries;

hintinfo.textContent = randomHint;

function reset() {
  randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex].toUpperCase();
  console.log(randomWord);
  randomHint = hints[randomIndex];
  hintinfo.textContent = randomHint;
  tries = 0;
  tryinfo.textContent = tries;
  console.log(isCorrect);
  isCorrect = [];
}

function wordle(guessword, targetword) {
  isCorrect = [];
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
        let difindex = 0;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j] && i == j) {
            ind = j;
          }
          if (guessword[i] == targetword[j] && i != j) {
            difindex = 1;
          }
        }
        if (i == ind) {
          resultext.push("1.Correct Letter\n");
          correctLetters++;
          isCorrect.push(2);
        } else if (i != ind && difindex == 1) {
          resultext.push("1.Correct Letter in incorrect position");
          isCorrect.push(1);
        } else if (i != ind && ind == -1) {
          resultext.push("1.Incorrect Letter ");
          isCorrect.push(0);
        }
      }
      if (i == 1) {
        let ind = -1;
        let difindex = 0;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j] && i == j) {
            ind = j;
          }if (guessword[i] == targetword[j] && i != j) {
            difindex = 1;
          }
        }
        if (i == ind) {
          resultext.push("2.Correct Letter");
          correctLetters++;
          isCorrect.push(2);
        } else if (i != ind && difindex == 1) {
          resultext.push("2.Correct Letter in incorrect position");
          isCorrect.push(1);
        } else if (i != ind && ind == -1) {
          resultext.push("2.Incorrect Letter ");
          isCorrect.push(0);
        }
      }
      if (i == 2) {
        let ind = -1;
        let difindex = 0;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j] && i == j) {
            ind = j;
          }
          if (guessword[i] == targetword[j] && i != j) {
            difindex = 1;
          }
        }
        if (i == ind) {
          resultext.push("3.Correct Letter");
          correctLetters++;
          isCorrect.push(2);
        } else if (i != ind && difindex == 1) {
          resultext.push("3.Correct Letter in incorrect position");
          isCorrect.push(1);
        } else if (i != ind && ind == -1) {
          resultext.push("3.Incorrect Letter ");
          isCorrect.push(0);
        }
      }
      if (i == 3) {
        let ind = -1;
        let difindex = 0;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j] && i == j) {
            ind = j;
          }
          if (guessword[i] == targetword[j] && i != j) {
            difindex = 1;
          }
        }
        if (i == ind) {
          resultext.push("4.Correct Letter");
          correctLetters++;
          isCorrect.push(2);
        } else if (i != ind && difindex == 1) {
          resultext.push("4.Correct Letter in incorrect position");
          isCorrect.push(1);
        } else if (i != ind && ind == -1) {
          resultext.push("4.Incorrect Letter ");
          isCorrect.push(0);
        }
      }
      if (i == 4) {
        let ind = -1;
        let difindex = 0;
        for (let j = 0; j < 5; j++) {
          if (guessword[i] == targetword[j] && i == j) {
            ind = j;
          }
          if (guessword[i] == targetword[j] && i != j) {
            difindex = 1;
          }
        }
        if (i == ind) {
          resultext.push("5.Correct Letter");
          isCorrect.push(2);
          correctLetters++;
        } else if (i != ind && difindex == 1) {
          resultext.push("5.Correct Letter in incorrect position");
          isCorrect.push(1);
        } else if (i != ind && ind == -1) {
          resultext.push("5.Incorrect Letter ");
          isCorrect.push(0);
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

  console.log(isCorrect);
}

button.addEventListener("click", () => {
  let wordguessed = document.getElementById("userword").value.toUpperCase();
  console.log(wordguessed);
  wordle(wordguessed, randomWord);
});
