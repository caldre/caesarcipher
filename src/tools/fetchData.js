import Axios from "axios";

async function fetchData() {
  const rootUrl = "https://koodihaaste-api.solidabis.com/bullshit";
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWxsc2hpdCI6ImJ1bGxzaGl0IiwiaWF0IjoxNTczMzk4MjcwfQ.SGM2omQlNExcGRiAjo1WiPL0XeDC_Ufu8U4I8oKR9Sk"
    }
  };

  const result = await Axios.get(rootUrl, config);
  return result;
}

fetchData();
