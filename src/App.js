import React, { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";
import Context from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <PublishMessage></PublishMessage>
        <MessageBoard></MessageBoard>
      </div>
    </Context.Provider>
  );
}

export default App;
