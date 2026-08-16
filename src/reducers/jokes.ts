import { JokeAction } from "../actions";

const initialState = { url: "", text: "" };

const jokes = (state = initialState, action: JokeAction) => {
  switch (action.type) {
    case "NEW_JOKE":
      return { ...state, url: action.url, text: action.text };
    default:
      return state;
  }
};

export default jokes;
