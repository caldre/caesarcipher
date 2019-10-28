import { data } from "./bullshits";

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

// Vokaalit erikseen sääntöjä varten
// const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];

// Välttääkseni for-looppeja kaikki mahdolliset Caesar-avaimet tallennettu variableen
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
  28,
  29
];

const { bullshits } = data;

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
const testWord = (word, index) => {
  return (
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
    word[word.length - 1] === "q" ||
    word[word.length - 1] === "r" ||
    word[word.length - 1] === "s" ||
    word[word.length - 1] === "v" ||
    word[word.length - 1] === "x" ||
    word[word.length - 1] === "z"
  );
};

export const sentences = { passedSentences: [], discardedSentences: [] };

// Funktio joka yhdistää Caesar-käännöksen ja testaa lauseen sanat sääntöjä vasten
// Tässä funktiossa vielä rikki se, että se lisää jo kertaalleen hyväksytyn lauseen alkuperäisen muodon
// discardedSentences:n joukkoon
const uncipherSentences = bullshits => {
  bullshits.map(bullshit => {
    cipherKeys.map(key => {
      if (
        cipher(bullshit.message, key)
          .split(" ")
          .some(testWord)
      ) {
        if (key === 29) {
          sentences.discardedSentences.push(bullshit);
        }
      } else {
        sentences.passedSentences.push(cipher(bullshit.message, key));
      }
    });
    return sentences;
  });
};

uncipherSentences(bullshits);

console.log(sentences);
