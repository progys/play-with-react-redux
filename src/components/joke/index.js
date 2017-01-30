import React from 'react';
import { render } from 'react-dom';

export default class Joke extends React.Component {

  render() {
    return (
      <div>
       {this.props.url &&
        <img src={this.props.url}></img>
       }
       {!this.props.url &&
        <p>Press to load Joke!</p>
       }
      </div>
    );
  }
}
