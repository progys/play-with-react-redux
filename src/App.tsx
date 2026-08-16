import React from "react";
import { connect } from "react-redux";
import Joke from "./features/jokes/Joke";
import { loadJoke } from "./actions";

const mapStateToProps = (state: any) => ({
  url: state.jokes.url,
  text: state.jokes.text
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadJoke: () => {
      dispatch(loadJoke());
    }
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const App = ({ url, text, loadJoke }: Props) => {
  return (
    <div className="container">
      <Joke url={url} text={text} />
      <button onClick={loadJoke}>Show!</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
