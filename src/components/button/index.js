import React from 'react';

export default class Button extends React.Component {
  render(){
    return (
      <button onClick={this.props.loadJoke}>Show!</button>
    )
  }
}

Button.propTypes = {
  loadJoke: React.PropTypes.func.isRequired,
}
