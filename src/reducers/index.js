import { combineReducers } from "redux";

const sentenceReducer = (sentenceList = [], action) => {
  switch (action.type) {
    case "ADD_SENTENCE":
      console.log("REDUCER: Adding new sentence");
      return [...sentenceList, action.payload];
    case "ADD_PASSED":
      console.log("REDUCER: Adding new sentence TO PASSED");
      return [...sentenceList, action.payload];
    default:
      console.log("Default triggered");
      return sentenceList;
  }
};

const passedReducer = (passedList = [], action) => {
  switch (action.type) {
    case "ADD_PASSED":
      console.log("REDUCER: Adding new sentence to PASSED");
      return [...passedList, action.payload];
    default:
      console.log("Default triggered");
      return passedList;
  }
};

const discardedReducer = (discardedList = [], action) => {
  switch (action.type) {
    case "ADD_DISCARDED":
      console.log("REDUCER: Adding new sentence to DISCARDED");
      return [...discardedList, action.payload];
    default:
      console.log("Default triggered");
      return discardedList;
  }
};

export default combineReducers({
  sentenceReducer,
  passedReducer,
  discardedReducer,
});
