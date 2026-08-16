import React from "react";

interface JokeProps {
  url: string;
  text: string;
}

const Joke = ({ url, text }: JokeProps) => {
  return (
    <div>
      {url && <img alt="joke" src={url} />}
      {text && <p>{text}</p>}
      {!url && !text && <p>Press to load a Joke!</p>}
    </div>
  );
};

export default Joke;
