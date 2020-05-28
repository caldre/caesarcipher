import {
  endsWith2Consonants,
  hasBadChars,
  endsWithBadChar,
  has4ConsecutiveVowelsOrConsonants,
  cantStartWith3VowelsOrConsonants,
  usingOnlySpecialChars,
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
for (let i = 0; i <= 28; i++) {
  cipherKeys.push(i);
}

// Apufunktio, Caesar-käännös
const cipher = (string, cipherKey) => {
  let newSentence = "";
  if (string === "") {
    return;
  }
  console.log(string);
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
        } else if (letters.indexOf(character) + cipherKey >= 28) {
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
    cantStartWith3VowelsOrConsonants(word) ||
    usingOnlySpecialChars(word) ||
    hasBadCombinationOfLetters(word) // Tämä on mielestäni huijaamista
  ) {
    return word;
  }
  return false;
};

// Funktio joka yhdistää Caesar-käännöksen ja testaa lauseen sanat sääntöjä vasten
const uncipherSentences = (sentences) => {
  if (!sentences) {
    return;
  }

  const uncipheredSentences = {
    passedSentences: [],
    discardedSentences: [],
  };

  sentences.forEach((sentence) => {
    cipherKeys.find((key) => {
      if (cipher(sentence, key).split(" ").find(testWord)) {
        if (key === 28) {
          // TÄMÄ PITÄIS LAITTAA TOIMINTAAN
          // addToDiscarded(sentence)
          uncipheredSentences.discardedSentences.push(sentence);
        }
      } else {
        let newString = cipher(sentence, key);
        let passedSentence = {
          id: sentence.id,
          sentence: newString,
        };
        // TÄMÄ PITÄIS LAITTAA TOIMINTAAN
        // addToPassed(passedSentence)
        uncipheredSentences.passedSentences.push(passedSentence);
        return uncipheredSentences;
      }
      return false;
    });
  });
  return uncipheredSentences;
};

export { cipher, uncipherSentences };
