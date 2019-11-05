import { data } from "./bullshits";
import "./kaikkisanat.txt";

const { bullshits } = data;
const letters = [
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

// Vokaalit erikseen sääntöjä varten ..to be continued
// const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];

const cipherKeys = [];
// Salausavainten määrä - suomalaisia aakkosia on 29
for (let i = 1; i <= 29; i++) {
  cipherKeys.push(i);
}

// Apufunktio, Caesar-käännös
const cipher = (string, cipherKey) => {
  let newSentence = "";
  string
    .toLowerCase()
    .split("")
    .map(character => {
      // Tarkastetaan onko kohdalla kirjain
      if (letters[letters.indexOf(character)]) {
        // Tarkastetaan että SHIFT on pienempi kuin aakkosten määrä
        if (letters.indexOf(character) + cipherKey <= 28) {
          newSentence += letters[letters.indexOf(character) + cipherKey];
          // Tarkastetaan pyörähtääkö ö --> a
        } else if (letters.indexOf(character) + cipherKey >= 29) {
          newSentence +=
            letters[letters.indexOf(character) - (letters.length - cipherKey)];
        }
      } // Ei ole aakkonen --> palautetaan muuttumattomana (välilyönti, erikoismerkki etc)
      else {
        newSentence += character;
      }
    });
  return newSentence;
};

// Apufunktio, testipatteri. Säännöt vielä keskeneräiset --> poistetaan mahdollisesti osa suorista kirjainestoista
// ja lisätään esim. 4 peräkkäistä vokaalia & 4 konsonanttia etc.
const testWord = word => {
  if (
    word.includes("c") ||
    word.includes("q") ||
    word.includes("w") ||
    word.includes("x") ||
    word.includes("z") ||
    word[word.length - 1] === "b" ||
    word[word.length - 1] === "d" ||
    word[word.length - 1] === "f" ||
    word[word.length - 1] === "g" ||
    word[word.length - 1] === "h" ||
    word[word.length - 1] === "j" ||
    word[word.length - 1] === "k" ||
    word[word.length - 1] === "l" ||
    word[word.length - 1] === "m" ||
    word[word.length - 1] === "p" ||
    word[word.length - 1] === "r" ||
    word[word.length - 1] === "v"
  ) {
    return word;
  }
};

export const sentences = {
  originalSentences: [],
  passedSentences: [],
  discardedSentences: []
};
bullshits.forEach(bullshit => {
  sentences.originalSentences.push(bullshit.message);
});

// Funktio joka yhdistää Caesar-käännöksen ja testaa lauseen sanat sääntöjä vasten
const uncipherSentences = bullshits => {
  bullshits.forEach(bullshit => {
    cipherKeys.find(key => {
      if (
        cipher(bullshit.message, key)
          .split(" ")
          .find(testWord)
      ) {
        if (key === 29) {
          sentences.discardedSentences.push(bullshit.message);
        }
      } else {
        sentences.passedSentences.push(cipher(bullshit.message, key));
        return sentences;
      }
    });
  });
  return sentences;
};

uncipherSentences(bullshits);
