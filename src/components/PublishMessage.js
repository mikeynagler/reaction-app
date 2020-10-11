import React, { useState, useContext } from "react";
import { newMessage } from "../state/actions";
import { useAppContext } from "./hooks";

const PublishMessage = () => {
  const [text, setText] = useState("");
  const { dispatch } = useAppContext();
  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    dispatch(newMessage(text));
  };

  const onHandleKeyPress = (event) => {
    if (event.key === "Enter") publishMessage();
  };

  return (
    <div>
      <h3>Say Something?</h3>
      <input
        value={text}
        onChange={updateText}
        type="text"
        onKeyPress={onHandleKeyPress}
      />
      <button onClick={publishMessage}>Publish!</button>
    </div>
  );
};

export default PublishMessage;
