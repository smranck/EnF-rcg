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
      6: 'Chezan',
      7: 'Cubi',
      8: 'Felia',
      9: 'Jarrith',
      10: 'Lich',
      11: 'Merfolk',
      12: 'True Banshee',
      13: 'Valkyr Aspect',
    };

    let num;
    if (originalsOnly) {
      num = Math.floor(Math.random() * 6);
    } else {
      num = Math.floor(Math.random() * 13);
    }

    return [num, races[num]];
  }

  static chooseLevel(max = 20) {
    return Math.ceil(Math.random() * max);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div>Initial Component</div>;
  }
}
