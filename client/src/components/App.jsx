import React from 'react';

export default class App extends React.Component {
  static rollDice(numberOfDice, sides) {
    let rolls = [];
    for (let i = 0; i < numberOfDice; i += 1) {
      rolls[i] = 1 + Math.floor(Math.random() * sides);
    }
    return rolls;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div>Initial Component</div>;
  }
}
