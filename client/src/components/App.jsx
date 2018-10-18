import React from 'react';

export default class App extends React.Component {
  // returns an array of individual rolls, sorted low to high
  static rollDice(numberOfDice, sides) {
    let rolls = [];
    for (let i = 0; i < numberOfDice; i += 1) {
      rolls[i] = 1 + Math.floor(Math.random() * sides);
    }
    rolls.sort((a, b) => a - b);
    return rolls;
  }

  static chooseRace(originalsOnly) {
    let races = {
      0: 'Arkhan',
      1: 'Equirion',
      2: 'Fibblan',
      3: 'Human',
      4: 'Iquoran',
      5: 'Khibblan',
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div>Initial Component</div>;
  }
}
