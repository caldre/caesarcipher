import { addToPassed, addToDiscarded } from "../actions";

import {
  endsWith2Consonants,
  hasBadChars,
  endsWithBadChar,
  has4ConsecutiveVowelsOrConsonants,
  cantStartWithThreeConsonants,
  hasBadCombinationOfLetters,
} from "./wordrules";

const sentences = {
  passedSentences: [],
  discardedSentences: [],
};

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
  "ö",
];

const cipherKeys = [];
// Salausavainten määrä - suomalaisia aakkosia on 29
for (let i = 1; i <= 29; i++) {
  cipherKeys.push(i);
}

// Apufunktio, Caesar-käännös
const cipher = (string, cipherKey) => {
  let newSentence = "";
  string.sentence
    .toLowerCase()
    //.slice(0, -1)
    .split("")
    .map((character) => {
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
      return newSentence;
    });
  return newSentence;
};

// Apufunktio, testipatteri. Säännöt vielä keskeneräiset --> poistetaan mahdollisesti osa suorista kirjainestoista
// ja lisätään esim. 4 peräkkäistä vokaalia & 4 konsonanttia etc.
const testWord = (word) => {
  if (
    endsWith2Consonants(word) ||
    hasBadChars(word) ||
    endsWithBadChar(word) ||
    has4ConsecutiveVowelsOrConsonants(word) ||
    cantStartWithThreeConsonants(word) ||
    hasBadCombinationOfLetters(word) // Tämä on mielestäni huijaamista
  ) {
    return word;
  }
};

// Funktio joka yhdistää Caesar-käännöksen ja testaa lauseen sanat sääntöjä vasten
const uncipherSentences = (data) => {
  if (!data) {
    return;
  }
  data.forEach((sentence) => {
    cipherKeys.find((key) => {
      if (cipher(sentence, key).split(" ").find(testWord)) {
        if (key === 29) {
          // TÄMÄ PITÄIS LAITTAA TOIMINTAAN
          // addToDiscarded(sentence)
          sentences.discardedSentences.push(sentence);
        }
      } else {
        console.log(cipher(sentence, key));
        let newString = cipher(sentence, key);
        let passedSentence = {
          id: sentence.id,
          sentence: newString,
        };
        // TÄMÄ PITÄIS LAITTAA TOIMINTAAN
        // addToPassed(passedSentence)
        addToPassed(passedSentence);
        sentences.passedSentences.push(passedSentence);
        return sentences;
      }
      return false;
    });
  });
  console.log(sentences);
  return sentences;
};

export { sentences, uncipherSentences };
