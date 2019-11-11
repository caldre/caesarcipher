import BullshitService from "./bullshitService";
import {
  endsWith2Consonants,
  // hasBadChars,
  // endsWithBadChar,
  has4ConsecutiveVowelsOrConsonants
  // hasBadCombinationOfLetters
} from "./wordrules";

const sentences = {
  passedSentences: [],
  discardedSentences: []
};

async function getBullshits() {
  return await BullshitService.getData();
}

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
    .slice(0, -1)
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
      return newSentence;
    });
  return newSentence;
};

// Apufunktio, testipatteri. Säännöt vielä keskeneräiset --> poistetaan mahdollisesti osa suorista kirjainestoista
// ja lisätään esim. 4 peräkkäistä vokaalia & 4 konsonanttia etc.
const testWord = word => {
  if (
    endsWith2Consonants(word) ||
    // hasBadChars(word) || HOX! Tämä sääntö oli näillä lauseilla turha, joten poistettu käytöstä
    // endsWithBadChar(word) || HOX! Tämä sääntö oli näillä lauseilla turha, joten poistettu käytöstä
    has4ConsecutiveVowelsOrConsonants(word)
    // hasBadCombinationOfLetters(word) // Tämä on mielestäni huijaamista
  ) {
    return word;
  }
};

// Funktio joka yhdistää Caesar-käännöksen ja testaa lauseen sanat sääntöjä vasten
const uncipherSentences = async () => {
  let bullshits = await getBullshits();
  bullshits.bullshits.forEach(bullshit => {
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
        sentences.passedSentences.push(
          cipher(bullshit.message.concat("."), key)
        );
        return sentences;
      }
      return false;
    });
  });
  return sentences;
};

uncipherSentences();

export { sentences };
