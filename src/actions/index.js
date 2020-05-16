import uuid from "uuid";

const addSentence = (sentence) => {
  console.log("ACTION: addSentence");
  return {
    type: "ADD_SENTENCE",
    payload: { id: uuid(), sentence },
  };
};

const addToPassed = (sentence) => {
  console.log("ACTION: addToPassed");
  return {
    type: "ADD_PASSED",
    payload: sentence,
  };
};

const addToDiscarded = (sentence) => {
  console.log("ACTION: addToDiscarded");
  return {
    type: "ADD_DISCARDED",
    payload: sentence,
  };
};

export { addSentence, addToPassed, addToDiscarded };
