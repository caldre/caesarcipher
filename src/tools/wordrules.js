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

// Lauseen mikään sana ei voi päättyä kahteen peräkkäiseen konsonanttiin
const endsWith2Consonants = word => {
  const lastTwoChars = word.split("").splice(word.length - 2);
  const isConsonant = character => {
    return !vowels.includes(character);
  };
  return lastTwoChars.every(isConsonant);
};

// Muuten kuin lainasanoissa tai erisnimissä kielessä ei esiinny C, Q, W, X, Z
const hasBadChars = word => {
  const badChars = ["c", "q", "w", "x", "z"];
  const checkForBadChars = character => {
    return badChars.includes(character);
  };
  return word.split("").find(checkForBadChars);
};

// Sana ei voi päättyä B, D, F, G, H, J, K, L, M, P, R, V
const endsWithBadChar = word => {
  const badChars = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "p", "r", "v"];
  return badChars.includes(word[word.length - 1]);
};

// Sanassa ei voi esiintyä neljää peräkkäistä vokaalia tai konsonanttia
const has4ConsecutiveVowelsOrConsonants = word => {
  if (word.length >= 4) {
    for (let i = 0; i < word.length - 3; i++) {
      let result = vowels.includes(word[i]);
      if (vowels.includes(word[i + 1]) === result) {
        if (vowels.includes(word[i + 2]) === result) {
          if (vowels.includes(word[i + 3]) === result) {
            return true;
          }
        }
      }
    }
  } else return false;
};

export {
  endsWith2Consonants,
  hasBadChars,
  endsWithBadChar,
  has4ConsecutiveVowelsOrConsonants
};
