import { combineReducers } from "redux";

const sentenceReducer = (sentenceList = [], action) => {
  switch (action.type) {
    case "ADD_SENTENCE":
      if (action.payload.sentence === "") {
        return sentenceList;
      }
      console.log("REDUCER: Adding new sentence");
      return [...sentenceList, action.payload];
    default:
      return sentenceList;
  }
};

export default combineReducers({
  sentenceReducer,
});
