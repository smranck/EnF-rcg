const classList = {
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

const nativeClasses = {
  Arkhan: [1, 2, 3, 4],
  Equirion: [5, 6, 7, 8],
  Fibblan: [9, 10, 11, 12],
  Human: [13, 14, 15, 16],
  Iquoran: [5, 6, 7, 8, 13, 14, 15, 16, 17, 18],
  Khibblan: [1, 2, 3, 4, 9, 10, 11, 12, 19, 20],
  Chezan: [9, 14, 10, 16, 12, 20],
  Cubi: [5, 6, 10, 11, 17, 20],
  Felia: [2, 14, 19, 4, 15, 18],
  Jarrith: [1, 9, 3, 11, 19, 4],
  Merfolk: [1, 7, 13, 15, 16, 18],
  'True Banshee': [5, 6, 7, 8, 13, 17],
  Lich: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  'Valkyr Aspect': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

const traitList = [
  'Savant of All Trades',
  'Adept Chef',
  'Adrenaline Rush',
  'Appraisal',
  'Bad Luck Reversal',
  'Blindsight',
  'Brilliant Mind',
  'Clever Maneuver',
  'Close Combat Expertise',
  'Cosmic Balance',
  'Cosmic Imbalance',
  'Dual Wielder',
  'Dueling Expert',
  'Energy Efficient',
  'Fast Metabolism',
  'Focused Eyes',
  'Giant Slayer',
  'Group Hugger',
  'Heavy Hitter',
  'Helping Hand',
  'Immovable Object',
  'Legend Seeker',
  'Light Traveler',
  'Locksmith',
  'Maximize Portential',
  'Median Adventurer',
  'Monster Hunter',
  'Naturally Gifted',
  'Nimble Body',
  'Nocturnal',
  'Packrat',
  'Performer',
  'Premonition',
  'Provoking Presence',
  'Quick Healer',
  'Ranged Combat Expertise',
  'Reckless Abandon',
  'Scaling',
  'Scaredy Cat',
  'Second Wind',
  'Situational Awareness',
  'Skillful Power Grip',
  'Sleight of Hand',
  'Solid Defence',
  'Spellcrafter',
  'Strength in Camaraderie',
  'Tractical Leader',
  'Thief',
  'Tracker',
  'Trap Disarming',
  'Unusually Lucky',
  'Unstoppable Force',
  'Unyielding',
  'Vigorous Spirit',
  'Well Read / Travelled',
  'The Will to Live',
];

const logToConsole = () => {
  console.log('Welcome to slack-casa!');
};

// returns an array of individual rolls, sorted low to high
const rollDice = (numberOfDice, sides) => {
  let rolls = [];
  for (let i = 0; i < numberOfDice; i += 1) {
    rolls[i] = 1 + Math.floor(Math.random() * sides);
  }
  rolls.sort((a, b) => a - b);
  return rolls;
};

// returns an array [number, 'race']
const chooseRace = (originalsOnly = false) => {
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
};

const chooseLevel = (max = 20) => Math.max(Math.ceil(Math.random() * max), 1);

// returns an array of attribute values in a random order
const createAttributes = () => {
  let attributes = [];

  for (let i = 0; i < 6; i += 1) {
    let roll = rollDice(3, 6);
    attributes.push(roll[2] + roll[3]);
  }

  return attributes;
};

// returns an array of quality values in a random order
const createQualities = () => {
  let qualities = [];

  for (let i = 0; i < 3; i += 1) {
    let roll = rollDice(3, 6);
    qualities.push(roll[2] + roll[3]);
  }

  return qualities;
};

// function to choose traits randomly. Returns an array of traits.
const chooseTraits = (level = 1, hardworking = false, nativeHuman = false) => {
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
    let whichTrait = Math.floor(Math.random() * traitList.length);
    if (hash[whichTrait]) {
      console.log('Dupe traits');
    } else if (whichTrait) {
      // not 0. 0 is savant
      traits.push(traitList[whichTrait]);
      hash[whichTrait] = true;
    } else {
      // savant case
      savant = true;
      traits = ['Savant of All Trades'];
    }
  }
  return traits;
};

// function to randomly assign a class. Race should be an array
const chooseClass = (race = false) => {
  let assignedClass;
  let randomNumber;
  // Race is only given if native is desired. Could later weight native classes.
  // race prop such that [raceNumber, 'race']
  if (race[0] < 4) {
    // there are 4 possibilities
    randomNumber = Math.floor(Math.random() * 4);
  } else if (race[0] < 6) {
    // 10 possibilities
    randomNumber = Math.floor(Math.random() * 10);
  } else if (race) {
    // there are 6 possibilities
    randomNumber = Math.floor(Math.random() * 6);
  } else {
    // this is the pick at random version
    randomNumber = Math.ceil(Math.random() * 20);
  }
  // NOTE: LICHES and Valkyrs DO IT ALL
  if (race) {
    assignedClass = classList[nativeClasses[race[1]][randomNumber]];
  } else {
    assignedClass = classList[randomNumber];
  }

  return assignedClass;
};

// function to randomly assign skills. Returns an object.
// eventually handle secondary classes
const chooseSkills = (level = 0, modifier = 0) => {
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
};

// function to assign attribute valuess to the correct attributes
// takes in array of attributes, a bool indicating if preference exists, and preference order
const assignAttributes = (ordered = false, str = 10, spr = 10, vit = 10, dex = 10, agi = 10) => {
  // initialize with the preference order
  let values = {
    str,
    spr,
    vit,
    dex,
    agi,
  };
  let attributes = ['str', 'spr', 'vit', 'dex', 'agi'];
  let attributeValues = createAttributes();

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
};

// function to assign the randomly values to qualities
const assignQualities = (ordered, obs = 10, char = 10, wis = 10) => {
  let values = { obs, char, wis };
  let qualities = ['obs', 'char', 'wis'];
  let qualityValues = createQualities();

  // if preference was indicated, the arrays must be sorted
  if (ordered) {
    qualityValues.sort();
    qualities.sort((a, b) => values[a] - values[b]);
  }

  for (let i = 0; i < qualities.length; i += 1) {
    let current = qualities[i];
    values[current] = qualityValues[i];
  }

  return values;
};

const checkForNativeClass = (race, characterClass) => {
  if (race === 'Lich' || race === 'Valkyr Aspect') {
    return true;
  }

  let isNative = false;
  for (let i = 0; i < nativeClasses[race].length; i += 1) {
    if (classList[nativeClasses[race][i]] === characterClass) {
      isNative = true;
    }
  }
  return isNative;
};

module.exports = {
  assignAttributes,
  assignQualities,
  checkForNativeClass,
  chooseClass,
  chooseLevel,
  chooseRace,
  chooseSkills,
  chooseTraits,
  classList,
  createAttributes,
  createQualities,
  logToConsole,
  nativeClasses,
  rollDice,
  traitList,
};
