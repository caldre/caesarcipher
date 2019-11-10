import React from "react";

const renderSentences = strings =>
  strings.map(sentence => {
    return (
      <li key={sentence} className="sentence">
        {sentence}
      </li>
    );
  });

const Messages = props => {
  return (
    <div className="message-board">
      <h4 className="card-header">
        <i
          className={props.className}
          style={{
            color: props.color
          }}
        />
        {props.header}
      </h4>
      <ol className="message-list">{renderSentences(props.messages)}</ol>
    </div>
  );
};

export default Messages;
