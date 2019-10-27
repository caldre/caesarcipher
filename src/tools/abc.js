import { data } from "./bullshits";

export const abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "å",
  "ä",
  "ö"
];

const cipherKeys = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28
];

// let vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];

const bullshits = data.bullshits;

// CAESAR-KÄÄNNÖS
export const cipher = (string, cipherKey) => {
  let newSentence = "";
  console.log(string);
  string
    .toLowerCase()
    .split("")
    .map(character => {
      // Tarkastetaan onko kohdalla kirjain
      if (abc[abc.indexOf(character)]) {
        // Tarkastetaan että SHIFT on pienempi kuin aakkosten määrä
        if (abc.indexOf(character) + cipherKey <= 28) {
          newSentence += abc[abc.indexOf(character) + cipherKey];
          // Tarkastetaan pyörähtääkö ö --> a
        } else if (abc.indexOf(character) + cipherKey >= 29) {
          newSentence += abc[abc.indexOf(character) - (abc.length - cipherKey)];
        }
      } // Ei ole aakkonen --> palautetaan muuttumattomana (välilyönti, erikoismerkki etc)
      else {
        newSentence += character;
      }
    });
  console.log(`"${string}" was ciphered to: "${newSentence}"`);
  return newSentence;
};

console.log(cipher("asdf", 1));

/* const testWord = word => {
  if (
    word.length <= 1 ||
    word.includes("c") ||
    word.includes("q") ||
    word.includes("w") ||
    word.includes("x") ||
    word.includes("z")
  ) {
    console.log(`FAILED. The word "${word}" didn't meet the requirements.`);
    return false;
  } else {
    console.log(`SUCCEEDED. The word "${word}" met the requirements.`);
    return true;
  }
}; */

const testWord = word => {
  return (
    word.includes("c") ||
    word.includes("q") ||
    word.includes("w") ||
    word.includes("x") ||
    word.includes("z")
  );
};

/* // tämä suomea
const suomila =
  "porausten tarkoitus on selvittää muun muassa kuinka laaja esiintymä todellisuudessa on ja missä määrin sitä voitaisiin kestävästi hyödyntää.";
//HUOMISEN JYRKI KORJAA NOI SPLITIT?!
const words = data.bullshits[7].message.split(" ");
// console.log(words);
console.log(suomila.split(" ").some(testWord)); */

let sentences = { passedSentences: [], discardedSentences: [] };

bullshits.map(bullshit => {
  cipherKeys.map(key => {
    console.log(bullshit);
    if (
      cipher(bullshit.message, key)
        .split(" ")
        .some(testWord)
    ) {
      sentences.discardedSentences.push(bullshit);
    } else {
      sentences.passedSentences.push(bullshit);
    }
  });

  /* if (!bullshit.message.split(" ").some(testWord)) {
    sentences.passedSentences.push(bullshit);
  }  else {
    sentences.discardedSentences.push(bullshit);
  } */
  return sentences;
});

console.log(sentences);
