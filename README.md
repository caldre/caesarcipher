## Vastaus Solidabiksen 2019 koodihaasteeseen

Haasteessa on haettu 200 kryptattua lausetta käyttäen Postman ohjelmaa.
Lauseet on kryptattu Caesar-salakirjoitusjärjestelmällä kirjaimia oikealle siirtämällä.
Aakkostona toimii A-Ö. Kirjainkoolla ei ole merkitystä. Jokaisen lauseen avain on satunnainen.
Käännettävissä olevat lauseet ovat suomea. Mukana on myös lauseita, jotka eivät käänny selkokieliseksi millään avaimella.

## Yleistä sanasäännöistä

Lauseiden kääntäminen tällä apilla perustuu sääntöihin,
sen sijaan että käytettäisiin suoraa vertailua johonkin sanakirjaan.
Lauseissa ei havaittu esimerkiksi erisnimiä, joka mahdollistaa tämän lähestymistavan.

Säännöissä ei ole menty siihen että poissuljettaisiin eri kirjainyhdistelmiä
esimerkiksi "njn", "tkj" tai "jr", joita ei kylläkään suomenkielessä esiinny.
Pidän niitä vähän kankeana koska näitä yhdistelmiä voi olla satoja ja en usko
että tällä tehtävällä haetaan sitä.

## Käytetyt säännöt

- Sana ei voi päättyä kahteen peräkkäiseen konsonanttiin
- Muuten kuin lainasanoissa tai erisnimissä kielessä ei esiinny C, Q, W, X, Z
- Sana ei voi päättyä B, D, F, G, H, J, K, L, M, P, R, V
- Sanassa ei voi esiintyä neljää peräkkäistä vokaalia tai konsonanttia

Vastaus on nähtävillä myös https://koodihaastesolidabis.herokuapp.com/

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.