import { Dispatch } from "redux";

export type JokeAction = {
  type: "NEW_JOKE";
  url: string;
};

const newJoke = (url: string): JokeAction => {
  return {
    type: "NEW_JOKE",
    url
  };
};

//TODO: cache result and display new joke from already downloaded reponse.
function loadJoke() {
  return (dispatch: Dispatch<JokeAction>) =>
    fetch(`https://www.reddit.com/r/funny.json`)
      .then(response => response.json())
      .then(json => json.data.children)
      .then((children: any) => dispatch(newJoke(children[Math.floor(Math.random() * children.length)].data.thumbnail)));
}

export { newJoke, loadJoke };
