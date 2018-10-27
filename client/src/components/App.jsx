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

  static chooseRace(originalsOnly = false) {
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
    return Math.ceil(Math.random() * max) + 1;
  }

  // returns an array of attribute values, sorted low to high
  static createAttributes(level) {
    let attributes = [];

    for (let i = 0; i < 6; i += 1) {
      let roll = App.rollDice(3, 6);
      attributes.push(roll[2] + roll[3]);
    }

    // attributes.sort((a, b) => a - b);

    return attributes;
  }

  // returns an array of quality values, sorted low to high
  static createQualities(level) {
    let qualities = [];

    for (let i = 0; i < 3; i += 1) {
      let roll = App.rollDice(3, 6);
      qualities.push(roll[2] + roll[3]);
    }

    // qualities.sort((a, b) => a - b);

    return qualities;
  }

  // function to choose traits randomly. Returns an array.
  static chooseTraits(level, hardworking) {
    let number = 2 + Math.floor(level / 7);
    if (level === 20) {
      number += 1;
    }
    if (hardworking) {
      number += 1;
    }
    let traits = [];
    let savant = false;
    let hash = {};
    // if savant, there can be no other traits
    while (traits.length < number && !savant) {
      let whichTrait = Math.floor(Math.random() * 56);
      if (hash[whichTrait]) {
        console.log('Dupe traits');
      } else if (whichTrait) {
        // not 0. 0 is savant
        traits.push(whichTrait);
        hash[whichTrait] = true;
      } else {
        // savant case
        savant = true;
        traits = [0];
      }
    }
    return traits;
  }

  // function to randomly assign a class
  static chooseClass(native = false) {
    /*
      Plan: if native is something, use it
      otherwise, assign at true random
      therefore, must list in order such that classes of races are adjacent?
    */
  }

  // function to randomly assign skills
  static chooseSkills(level, modifier) {
    /*
    Each class has the same number of skills
    number of skills depends on level
    Only basics can be assigned up to a certain threshold
    */
  }

  // function to assign attribute valuess to the correct attributes
  // takes in array of attributes, a bool indicating if preference exists, and preference order
  static assignAttributes(
    attributeValuesArray,
    ordered,
    str = 10,
    spr = 10,
    vit = 10,
    dex = 10,
    agi = 10,
  ) {
    // initialize with the preference order
    let values = {
      str,
      spr,
      vit,
      dex,
      agi,
    };
    let attributes = ['str', 'spr', 'vit', 'dex', 'agi'];
    let attributeValues = attributeValuesArray.slice();

    // if preference was indicated:
    if (ordered) {
      // sort the list of values, low to high
      attributeValues.sort();
      // sort the attribute names based on order
      attributes.sort((a, b) => values[a] - values[b]);
    }

    // Iterate through attribute names
    for (let i = 0; i < attributes.length; i += 1) {
      let current = attributes[i];
      // Replace the preference value with the actual randomized value
      values[current] = attributeValues[i];
    }

    return values;
  }

  static assignQualities(qualityValuesArray, ordered, obs = 10, char = 10, wis = 10) {
    let values = { obs, char, wis };
    let qualities = ['obs', 'char', 'wis'];
    let qualityValues = qualityValuesArray.slice();

    if (ordered) {
      qualityValues.sort();
      qualities.sort((a, b) => values[a] - values[b]);
    }

    for (let i = 0; i < qualities.length; i += 1) {
      let current = qualities[i];
      values[current] = qualityValues[i];
    }

    return values;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div>Initial Component</div>;
  }
}
