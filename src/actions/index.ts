import { Dispatch } from "redux";

export type JokeAction = {
  type: "NEW_JOKE";
  url: string;
  text: string;
};

const newJoke = (url: string, text: string): JokeAction => {
  return {
    type: "NEW_JOKE",
    url,
    text
  };
};

function loadJoke() {
  return (dispatch: Dispatch<JokeAction>) =>
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then((data: any) => dispatch(newJoke(data.icon_url, data.value)));
}

export { newJoke, loadJoke };
