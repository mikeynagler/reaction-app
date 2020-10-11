import React, { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from './components/MessageBoard'
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <PublishMessage dispatcher={dispatch}></PublishMessage>
      <MessageBoard messages={state.messages}></MessageBoard>
    </div>
  );
}

export default App;
