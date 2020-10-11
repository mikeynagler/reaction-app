import { NEW_MESSAGE } from "./types";
import { v4 as uuid } from "uuid";

export const newMessage = (text) => {
  return {
    type: NEW_MESSAGE,
    payload: { id: uuid(), text, timestamp: Date.now() },
  };
};
