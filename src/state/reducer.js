import { NEW_MESSAGE } from "./types";

export const initialState = { messages: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default reducer;
