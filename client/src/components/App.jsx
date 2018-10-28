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

  // returns an array [number, 'race']
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
    return Math.max(Math.ceil(Math.random() * max), 1);
  }

  // returns an array of attribute values in a random order
  static createAttributes() {
    let attributes = [];

    for (let i = 0; i < 6; i += 1) {
      let roll = App.rollDice(3, 6);
      attributes.push(roll[2] + roll[3]);
    }

    return attributes;
  }

  // returns an array of quality values in a random order
  static createQualities() {
    let qualities = [];

    for (let i = 0; i < 3; i += 1) {
      let roll = App.rollDice(3, 6);
      qualities.push(roll[2] + roll[3]);
    }

    return qualities;
  }

  // function to choose traits randomly. Returns an array.
  static chooseTraits(level, hardworking, nativeHuman) {
    let number = 2 + Math.floor(level / 7);
    if (level === 20) {
      number += 1;
    }
    if (hardworking) {
      number += 2;
    }
    if (nativeHuman) {
      number += 1;
    }
    let traits = [];
    let savant = false;
    // savant will not be in the hash - no 0;
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

  // function to randomly assign a class. Race should be an array
  static chooseClass(race = false) {
    let classes = {
      1: 'Artillery Jockey',
      2: 'Crush Avatar',
      3: 'Doom Harbinger',
      4: 'Infernal Reaper',
      5: 'Arcane Ranger',
      6: 'Blood Letterer',
      7: 'Cross Assailant',
      8: 'Essence Abolisher',
      9: 'Divine Sentinel',
      10: 'Flow Assimilator',
      11: 'Flow Rupturer',
      12: 'Soul Morpher',
      13: 'Crusade Maestro',
      14: 'Empyreal Ronin',
      15: 'Noble Gallant',
      16: 'Runic Chevalier',
      17: 'Mystic Gunslinger',
      18: 'Resolute Champion',
      19: 'Glorious Hunter',
      20: 'Twilight Sentry',
    };

    let assignedClass;
    // Race is only given if native is desired. Could later weight native classes.
    // race prop such that [raceNumber, 'race']
    if (race[0] < 4) {
      // there are 4 possibilities
      let random = Math.floor(Math.random() * 4);
      if (race[1] === 'Arkhan') {
        let nativeClasses = [1, 2, 3, 4];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Equirion') {
        let nativeClasses = [5, 6, 7, 8];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Fibblan') {
        let nativeClasses = [9, 10, 11, 12];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Human') {
        let nativeClasses = [13, 14, 15, 16];
        assignedClass = classes[nativeClasses[random]];
      }
    } else if (race[0] < 6) {
      // 10 possibilities
      let random = Math.floor(Math.random() * 10);
      if (race[1] === 'Iquoran') {
        let nativeClasses = [5, 6, 7, 8, 13, 14, 15, 16, 17, 18];
        assignedClass = classes[nativeClasses[random]];
        //
      } else if (race[1] === 'Khibblan') {
        let nativeClasses = [1, 2, 3, 4, 9, 10, 11, 12, 19, 20];
        assignedClass = classes[nativeClasses[random]];
      }
    } else if (race) {
      // there are 6 possibilities
      let random = Math.floor(Math.random() * 6);
      if (race[1] === 'Chezan') {
        let nativeClasses = [9, 14, 10, 16, 12, 20];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Cubi') {
        let nativeClasses = [5, 6, 10, 11, 17, 20];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Felia') {
        let nativeClasses = [2, 14, 19, 4, 15, 18];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Jarrith') {
        let nativeClasses = [1, 9, 3, 11, 19, 4];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'Merfolk') {
        let nativeClasses = [1, 7, 13, 15, 16, 18];
        assignedClass = classes[nativeClasses[random]];
      } else if (race[1] === 'True Banshee') {
        let nativeClasses = [5, 6, 7, 8, 13, 17];
        assignedClass = classes[nativeClasses[random]];
      }
    } else {
      // this is the pick at random version
      assignedClass = classes[Math.ceil(Math.random() * 20)];
    }
    // NOTE: LICHES and Valkyrs DO IT ALL
    return assignedClass;
  }

  // function to randomly assign skills. Returns an object.
  // eventually handle secondary classes
  static chooseSkills(level, modifier = 0) {
    // totalSkillCount reflects total skills needed
    let totalSkillCount = 2;
    let assignedSkills = [];
    let advancedSkillsAssigned = 0;
    totalSkillCount += modifier;
    // a skill is gained every odd level other than level 1
    if (level > 2) {
      totalSkillCount += level % 2;
    }

    let skills = {};

    // if all skills, assign all skills
    if (totalSkillCount === 15) {
      for (let i = 1; i < 16; i += 1) {
        // it will eventually be classSkills[i];
        skills[i] = i;
      }
      return skills;
    }

    let random = Math.ceil(Math.random() * 6);
    // assign the initial skill
    skills[random] = random;
    assignedSkills.push(random);
    // create and assign the second skill
    while (skills[random]) {
      random = Math.ceil(Math.random() * 6);
    }
    skills[random] = random;
    assignedSkills.push(random);

    // if more skills are needed, up to 4, they could be advanced skills
    if (totalSkillCount > 2) {
      // assign skills until the correct total have been assigned
      while (assignedSkills.length < totalSkillCount) {
        // create a random value that hasn't been assigned yet
        while (skills[random]) {
          if (advancedSkillsAssigned >= 2) {
            // dailies are available after 2 advanced skills are assigned
            random = Math.ceil(Math.random() * 15);
          } else {
            random = Math.ceil(Math.random() * 13);
          }
        }
        skills[random] = random;
        assignedSkills.push(random);
        if (random > 6) {
          advancedSkillsAssigned += 1;
        }
      }
    }

    return skills;
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

  // function to assign the randomly values to qualities
  static assignQualities(qualityValuesArray, ordered, obs = 10, char = 10, wis = 10) {
    let values = { obs, char, wis };
    let qualities = ['obs', 'char', 'wis'];
    let qualityValues = qualityValuesArray.slice();

    // if preference was indicated, the arrays must be sorteds
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
