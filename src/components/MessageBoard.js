import React from "react";

function MessageBoard({ messages }) {
  return (
    <div>
      {messages.map((message) => {
        const { id, text, timestamp } = message;
        return <div key={id}>
          <h4>{new Date(timestamp).toLocaleString()}</h4>
          <p>{text}</p>
          <hr/>
        </div>
      })}
    </div>
  );
}

export default MessageBoard;
