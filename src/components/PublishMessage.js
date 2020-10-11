import React, { useState } from "react";
import { newMessage } from "../state/actions";

const PublishMessage = ({ dispatcher }) => {
  const [text, setText] = useState("");
  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    dispatcher(newMessage(text));
  };

  const onHandleKeyPress = (event) => {
    if (event.key === "Enter") publishMessage();
  };

  return (
    <div>
      <h3>Say Something?</h3>
      <input value={text} onChange={updateText} type="text" onKeyPress={onHandleKeyPress}/>
      <button onClick={publishMessage}>Publish!</button>
    </div>
  );
};

export default PublishMessage;
