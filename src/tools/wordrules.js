// YLEISTÄ SÄÄNNÖISTÄ
// Lauseiden kääntäminen tällä apilla perustuu sääntöihin,
// sen sijaan että käytettäisiin suoraa vertailua johonkin sanakirjaan.
// Lauseissa ei havaittu esimerkiksi erisnimiä, joka mahdollistaa tämän lähestymistavan
//
// Säännöissä ei ole (toistaiseksi) menty siihen että poissuljettaisiin eri kirjainyhdistelmiä
// esimerkiksi "njn", "tkj" ja "jr" joita ei kylläkään suomenkielessä esiinny.
// Pidän niitä vähän kankeana koska näitä yhdistelmiä voi olla satoja, otetaan mahdollisesti silti käyttöön mikäli
// pseudosuomea ei muulla tavoin saada karsittua

const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];

// Lauseen mikään sana ei voi päättyä kahteen peräkkäiseen konsonanttiin
const endsWith2Consonants = (word) => {
  const lastTwoCharacters = word.split("").splice(word.length - 2);
  const isConsonant = (character) => {
    return consonants.includes(character);
  };
  return lastTwoCharacters.every(isConsonant);
};

// Muuten kuin lainasanoissa tai erisnimissä kielessä ei esiinny C, Q, W, X, Z, Å
const hasBadChars = (word) => {
  const badCharacters = ["c", "q", "w", "x", "z", "å"];
  const checkForBadChars = (character) => {
    return badCharacters.includes(character);
  };
  return word.split("").find(checkForBadChars);
};

// Sana ei voi päättyä B, F, G, H, J, K, L, M, P, R, V
const endsWithBadChar = (word) => {
  const badEndCharacters = [
    "b",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "p",
    "r",
    "v",
  ];
  return badEndCharacters.includes(word[word.length - 1]);
};

// Sanassa ei voi esiintyä neljää peräkkäistä vokaalia tai konsonanttia
const has4ConsecutiveVowelsOrConsonants = (word) => {
  if (word.length >= 4) {
    for (let i = 0; i < word.length - 3; i++) {
      let result = vowels.includes(word[i]);
      if (vowels.includes(word[i + 1]) === result) {
        if (vowels.includes(word[i + 2]) === result) {
          if (vowels.includes(word[i + 3]) === result) {
            return true;
          }
          return false;
        }
        return false;
      }
      return false;
    }
  } else return false;
};

console.log(has4ConsecutiveVowelsOrConsonants("aaaa"));

// Sanat eivät voi alkaa kolmella perättäisellä konsonantilla, tai vokaalilla
const cantStartWith3VowelsOrConsonants = (word) => {
  if (word[0] !== "i" && word[1] === "i" && word[2] !== "i") {
    // Poikkeussääntö: "aie", "aiemmin", oikaista --> "oion"

    return false;
  }
  // Lisäyssääntö: erikoismerkit
  if (word.includes(vowels)) {
    let result = vowels.includes(word[0]);
    if (vowels.includes(word[1]) === result) {
      if (vowels.includes(word[2]) === result) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

const usingOnlySpecialChars = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (!consonants.includes(word[i]) && !vowels.includes(word[i])) {
      return false;
    }
    if (consonants.includes(word[i]) || vowels.includes(word[i])) {
      return false;
    }
  }
  return true;
};

// Sana sisältää kieleen kuulumattomia kirjainyhdistelmiä
const hasBadCombinationOfLetters = (word) => {
  const badCombinations = [];
  return badCombinations.includes(word);
};

export {
  endsWith2Consonants,
  hasBadChars,
  endsWithBadChar,
  has4ConsecutiveVowelsOrConsonants,
  cantStartWith3VowelsOrConsonants,
  usingOnlySpecialChars,
  hasBadCombinationOfLetters,
};
