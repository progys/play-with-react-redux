import React from 'react';
import { connect } from 'react-redux';

import Joke from '../components/joke';
import Button from '../components/button';

import { loadJoke } from '../actions'

class App extends React.Component {

 render() {
   return (
     <div>
      <Joke url={this.props.url} />
      <Button loadJoke={this.props.loadJoke} />
    </div>
  );
 }
};

const mapStateToProps = (state) => ({
  url: state.get('joke').get('url'),
});

const mapDispatchToProps = (dispatch) => {
  return {
      loadJoke: () => {
        dispatch(loadJoke())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
