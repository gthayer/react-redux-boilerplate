import React from 'react';

const Counter = React.createClass({
  render() {

    const { counter } = this.props;

    return (
      <div>
        <button onClick={ this.props.increment }>Push Me</button>
        <p>{ counter } clicks so far.</p>
      </div>
    )
  }
});

export default Counter;
