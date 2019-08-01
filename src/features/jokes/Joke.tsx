import React from "react";

interface JokeProps {
  url: string;
}

const Joke = ({ url }: JokeProps) => {
  return (
    <div>
      {url && <img alt="joke" src={url} />}
      {!url && <p>Press to load a Joke!</p>}
    </div>
  );
};

export default Joke;
