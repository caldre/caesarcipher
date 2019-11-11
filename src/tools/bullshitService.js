import axios from "axios";

const BullshitService = {
  getData: async function getData() {
    const url = "http://localhost:3001/bullshits";
    const result = await axios.get(url);
    return result.data;
  }
};

export default BullshitService;
