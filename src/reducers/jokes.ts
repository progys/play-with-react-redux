import Immutable from "immutable";
import { JokeAction } from "../actions";

const initialState = Immutable.Map();

const jokes = (state = initialState, action: JokeAction) => {
  switch (action.type) {
    case "NEW_JOKE":
      return state.set("url", action.url);
    default:
      return state;
  }
};

export default jokes;
