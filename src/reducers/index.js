import { combineReducers } from "redux";

const sentenceReducer = (sentenceList = [], action) => {
  switch (action.type) {
    case "ADD_SENTENCE":
      console.log("REDUCER: Adding new sentence");
      return [...sentenceList, action.payload];

    default:
      console.log("Default triggered");
      return sentenceList;
  }
};

export default combineReducers({
  sentenceReducer,
});
