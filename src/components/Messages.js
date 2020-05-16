import React from "react";

const Messages = (props) => {
  const renderSentences = (sentences) =>
    sentences.map((sentence) => {
      return (
        <li key={sentence.id} className="sentence">
          {sentence.sentence}
        </li>
      );
    });

  return (
    <div className="message-card">
      <h4 className="card-header">
        <i
          className={props.className}
          style={{
            color: props.color,
          }}
        />
        {props.header}s<br /> found: {props.messages.length}
      </h4>

      <ul className="message-list">{renderSentences(props.messages)}</ul>
    </div>
  );
};

export default Messages;
