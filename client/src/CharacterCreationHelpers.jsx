// List of classes for later use
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

// Endpoints for level experience values such that level:[start, end]
const levelExperienceEndpoints = {
  1: [0, 999],
  2: [1000, 2999],
  3: [3000, 6999],
  4: [7000, 12999],
  5: [13000, 20999],
  6: [21000, 30999],
  7: [31000, 42999],
  8: [43000, 56999],
  9: [57000, 72999],
  10: [73000, 90999],
  11: [91000, 109999],
  12: [110000, 132999],
  13: [133000, 156999],
  14: [157000, 182999],
  15: [183000, 210999],
  16: [211000, 240999],
  17: [241000, 272999],
  18: [273000, 306999],
  19: [307000, 349999],
  20: [350000, 400000],
};

// Numbers in array correspond to classList
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

// List of all traits in game
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
const chooseRace = (desiredRace = false) => {
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
  if (desiredRace) {
    if (desiredRace === 'originalsOnly') {
      num = Math.floor(Math.random() * 6);
    } else {
      num = desiredRace;
    }
  } else {
    num = Math.floor(Math.random() * 14);
  }

  return [num, races[num]];
};

// function that assigns a level and returns it
const assignLevel = (max = 20, desiredLevel = false) => desiredLevel || Math.ceil(Math.random() * max);

// returns an array of attribute values in a random order
const createAttributes = (savant = false, minimumTotal = 20, defaultStats = true) => {
  let attributes = [];
  let sum = 0;
  let firstRoll = rollDice(3, 6);
  firstRoll = firstRoll[1] + firstRoll[2];
  let secondRoll = rollDice(3, 6);
  secondRoll = secondRoll[1] + secondRoll[2];

  let lowest = Math.min(firstRoll, secondRoll);
  let highest = Math.max(firstRoll, secondRoll);

  while (attributes.length < 5) {
    let dice = rollDice(3, 6);
    let roll = dice[1] + dice[2];
    let value = roll;
    if (savant) {
      roll += 1;
    }
    if (roll < lowest) {
      value = lowest;
      lowest = roll;
    }
    if (roll > highest) {
      value = highest;
      highest = roll;
    }

    attributes.push(value);
    sum += value;
  }

  // default stats are minimum 4, maximum 12, total of 40
  if (defaultStats) {
    // first, set all attributes such that 4 <= attribute <= 12
    for (let i = 0; i < attributes.length; i += 1) {
      while (attributes[i] < 4) {
        attributes[i] += 1;
        sum += 1;
      }
      // this should be impossible, here for completeness
      while (attributes[i] > 12) {
        attributes[i] -= 1;
        sum -= 1;
      }
    }

    // Adjust randomly chosen values until total is 40
    while (sum !== 40) {
      let indexToChange = Math.floor(Math.random() * attributes.length);
      if (sum > 40 && attributes[indexToChange] > 4) {
        attributes[indexToChange] -= 1;
        sum -= 1;
      } else if (sum < 40 && attributes[indexToChange] < 12) {
        attributes[indexToChange] += 1;
        sum += 1;
      }
    }
  } else if (sum < minimumTotal) {
    // 60 should be max, handle?
    while (sum < minimumTotal) {
      let indexToChange = Math.floor(Math.random() * attributes.length);
      if (attributes[indexToChange] < 12) {
        attributes[indexToChange] += 1;
        sum += 1;
      }
    }
  }

  return attributes;
};

// returns an array of quality values in a random order
// minimumTotal is like a mercy rule of sorts
const createQualities = (savant = false, minimumTotal = 12, defaultStats = true) => {
  let qualities = [];
  let sum = 0;

  let firstRoll = rollDice(3, 6);
  firstRoll = firstRoll[1] + firstRoll[2];
  let secondRoll = rollDice(3, 6);
  secondRoll = secondRoll[1] + secondRoll[2];

  let lowest = Math.min(firstRoll, secondRoll);
  let highest = Math.max(firstRoll, secondRoll);

  while (qualities.length < 3) {
    let dice = rollDice(3, 6);
    let roll = dice[1] + dice[2];
    let value = roll;
    if (savant) {
      roll += 1;
    }
    if (roll < lowest) {
      value = lowest;
      lowest = roll;
    }
    if (roll > highest) {
      value = highest;
      highest = roll;
    }

    qualities.push(value);
    sum += value;
  }

  // default stats are minimum 4, maximum 12, total of 24
  if (defaultStats) {
    // first, set all qualities such that 4 <= attribute <= 12
    for (let i = 0; i < qualities.length; i += 1) {
      while (qualities[i] < 4) {
        qualities[i] += 1;
        sum += 1;
      }
      // this should be impossible, here for completeness
      while (qualities[i] > 12) {
        qualities[i] -= 1;
        sum -= 1;
      }
    }

    // Adjust randomly chosen values until total is 24
    while (sum !== 24) {
      let indexToChange = Math.floor(Math.random() * qualities.length);
      if (sum > 24 && qualities[indexToChange] > 4) {
        qualities[indexToChange] -= 1;
        sum -= 1;
      } else if (sum < 24 && qualities[indexToChange] < 12) {
        qualities[indexToChange] += 1;
        sum += 1;
      }
    }
  } else if (sum < minimumTotal) {
    // 36 should be max, handle?
    while (sum < minimumTotal) {
      let indexToChange = Math.floor(Math.random() * qualities.length);
      if (qualities[indexToChange] < 12) {
        qualities[indexToChange] += 1;
        sum += 1;
      }
    }
  }

  return qualities;
};

// function to choose traits randomly. Returns an array of traits.
const chooseTraits = (level = 1, hardworking = false, nativeClassBonus = false) => {
  // the minimum is 2 traits
  let totalTraits = 2;
  // gain an extra trait at levels divisible by 7
  totalTraits += Math.floor(level / 7);
  // gain another trait at level 20
  if (level === 20) {
    totalTraits += 1;
  }
  // gain 2 more traits if a human
  if (hardworking) {
    totalTraits += 2;
  }
  // some native class bonuses give an extra trait
  if (nativeClassBonus) {
    totalTraits += 1;
  }

  let traits = [];
  let savant = false;
  // savant will not be in the hash - no 0;
  let hash = {};
  // if savant, there can be no other traits
  while (traits.length < totalTraits && !savant) {
    let whichTrait = Math.floor(Math.random() * traitList.length);
    if (hash[whichTrait]) {
      console.log('Dupe traits');
    } else if (whichTrait) {
      // 0 is savant. Not 0 ends up here
      traits.push(traitList[whichTrait]);
      hash[whichTrait] = true;
    } else if (traits.length < 2) {
      // savant can only be assigned as one of the first 2 traits
      savant = true;
    }
  }

  // put the right strings into the traits array
  if (savant) {
    traits = ['Savant of All Trades'];
  } else if (hardworking && nativeClassBonus) {
    traits[2] = 'Hardworking - '.concat(traits[2]);
    traits[3] = 'Hardworking - '.concat(traits[3]);
    traits[4] = nativeClassBonus.concat(` - ${traits[4]}`);
  } else if (hardworking) {
    traits[2] = 'Hardworking - '.concat(traits[2]);
    traits[3] = 'Hardworking - '.concat(traits[3]);
  } else if (nativeClassBonus) {
    traits[2] = nativeClassBonus.concat(` - ${traits[2]}`);
  }

  return traits;
};

// function to randomly assign a class. Race should be an array
// Returns a string
const chooseClass = (race = false, desiredClass = false) => {
  let assignedClass;
  let randomNumber;
  // if desired class, it's easy
  if (desiredClass) {
    return classList[desiredClass];
  }
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

// function to randomly assign skills. Returns a sorted array. Skills are 1 indexed
// eventually handle secondary classes?
// modifier is anything that allows additional skills - scrolls, etc.
const assignSkills = (level = 1, modifier = 0) => {
  // totalSkillCount reflects total skills needed
  let totalSkillCount = 2;
  let assignedSkills = [];
  let advancedSkillsAssigned = 0;
  totalSkillCount += modifier;
  // a skill is gained every odd level other than level 1
  if (level > 2) {
    totalSkillCount += Math.floor((level - 1) / 2);
  }

  // handle case where skill count is higher than 15;
  totalSkillCount = Math.min(totalSkillCount, 15);

  let skills = {};

  // if all skills, assign all skills
  if (totalSkillCount === 15) {
    for (let i = 1; i < 16; i += 1) {
      // it will eventually be classSkills[i];
      assignedSkills.push(i);
    }
    return assignedSkills;
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

  // third skill, if necessary, must be basic
  if (totalSkillCount > 2) {
    while (skills[random]) {
      random = Math.ceil(Math.random() * 6);
    }
    skills[random] = random;
    assignedSkills.push(random);
  }
  // Additional skills can also be advanced. Skill after 2 advanced can also be dailies
  if (totalSkillCount > 3) {
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

  assignedSkills.sort((a, b) => a - b);

  return assignedSkills;
};

// function to assign attribute valuess to the correct attributes
// takes in array of attributes, a bool indicating if preference exists, and preference order
const assignAttributes = (
  ordered = false,
  str = 10,
  spr = 10,
  vit = 10,
  dex = 10,
  agi = 10,
  savant = false,
  minimumTotal = 40,
  defaultStats = true,
  prodigious = false,
) => {
  // initialize with the preference order
  let values = {
    str,
    spr,
    vit,
    dex,
    agi,
  };
  let attributes = ['str', 'spr', 'vit', 'dex', 'agi'];
  let attributeValues = createAttributes(savant, minimumTotal, defaultStats);

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

  if (prodigious) {
    let index = Math.floor(Math.random() * 5);
    values[attributes[index]] = `${values[attributes[index]]} + Prodigious`;
  }

  return values;
};

// function to assign the randomly values to qualities. Returns an Object
const assignQualities = (
  ordered,
  obs = 10,
  char = 10,
  wis = 10,
  savant = false,
  minimumTotal = 12,
  defaultStats = true,
  prodigious = false,
) => {
  let values = { obs, char, wis };
  let qualities = ['obs', 'char', 'wis'];
  let qualityValues = createQualities(savant, minimumTotal, defaultStats);

  // if preference was indicated, the arrays must be sorted
  if (ordered) {
    qualityValues.sort();
    qualities.sort((a, b) => values[a] - values[b]);
  }

  for (let i = 0; i < qualities.length; i += 1) {
    let current = qualities[i];
    values[current] = qualityValues[i];
  }

  if (prodigious) {
    let index = Math.floor(Math.random() * 3);
    values[qualities[index]] = `${values[qualities[index]]} + Prodigious`;
  }

  return values;
};

// function to check for native class. Returns a boolean.
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

// function to provide Native Class Bonus as needed. Returns a string
const provideNativeClassBonus = (characterClass) => {
  let nativeClassBonuses = {
    'Artillery Jockey': 'Strongarm Aggression',
    'Crush Avatar': 'Strongarm Aggression',
    'Doom Harbinger': 'Strongarm Aggression',
    'Infernal Reaper': 'Strongarm Aggression',
    'Arcane Ranger': 'Elegant Speed',
    'Blood Letterer': 'Elegant Speed',
    'Cross Assailant': 'Elegant Speed',
    'Essence Abolisher': 'Elegant Speed',
    'Divine Sentinel': 'Flow Reserve',
    'Flow Assimilator': 'Flow Reserve',
    'Flow Rupturer': 'Flow Reserve',
    'Soul Morpher': 'Flow Reserve',
    'Crusade Maestro': 'Adaptation',
    'Empyreal Ronin': 'Adaptation',
    'Noble Gallant': 'Adaptation',
    'Runic Chevalier': 'Adaptation',
    'Mystic Gunslinger': 'Ancestral Pride',
    'Resolute Champion': 'Ancestral Pride',
    'Glorious Hunter': 'Bestial Force',
    'Twilight Sentry': 'Bestial Force',
  };
  return nativeClassBonuses[characterClass];
};

// function to assign a race trait and the free special trait. Expects a string
const assignRaceTrait = (race, savant = false) => {
  const raceTraits = {
    Arkhan: ['Intimidation', 'Immense Strength', 'Military Training', 'Primal Burst'],
    Equirion: ['Equirion Majesty', 'Exploit Weakness', 'Forest Dweller', 'The Superior Race'],
    Fibblan: ['Epansive Mind', 'Flourishing Nutrients', 'Magical Attunement', 'Synthesis'],
    Human: ['Initiative', 'Intense Discipline', 'Prodigious', 'Tenacity'],
    Iquoran: [
      'Accomplished Worker',
      'Covered Weaknesses',
      'Halfkin Inheritance',
      'Talented Wielder',
    ],
    Khibblan: ['Acclimated Hide', 'Beastkin Inheritance', 'Exploit Strengths', 'Primeval Harmony'],
    Chezan: ['Bloodkin Inheritance', 'Exertive Energy', 'Momentary Lunacy', 'Redirect Exhaustion'],
    Cubi: ['Dark Embrace', 'Love Tap', 'Magical Aptitude', 'Seductive Appearance'],
    Felia: ['Felia Reflexes', 'Natural Born Hunters', 'Predatory Quirks', 'Scrappy Fighter'],
    Jarrith: ['Intimidating Presence', 'Jarrith Breath', 'Jarrith Roar', 'Unrelenting Beast'],
    Lich: ['Dark Magic', 'Magical Aptitude', 'Touch of Death', 'Unearthly Presence'],
    Merfolk: ['Hydomancy', 'Juggernaut Upbringing', 'Mage Upbringing', 'Warrior Upbringing'],
    'True Banshee': ['Death Wail', 'Hypnotic Voice', 'Omen of Death', 'Voice of Inspiration'],
    'Valkyr Aspect': [
      "Amandra's Blessings",
      'Force of Holiness',
      'Live to Serve',
      'Path of the Valkyr',
    ],
  };
  const specialTraits = {
    Arkhan: 'Arkhan Physiology',
    Equirion: 'Equirion Physiology',
    Fibblan: 'Fibblan Physiology',
    Human: 'The Hardworking',
    Iquoran: 'Iquoran Physiology',
    Khibblan: 'Khibblan Physiology',
    Chezan: 'Great Shadow Infection',
    Cubi: 'Insatiable Lust',
    Felia: 'Felesian Ancestry',
    Jarrith: 'Jarrith Psysiology',
    Lich: 'Phylactery',
    Merfolk: 'Hydration',
    'True Banshee': 'Ghastly Physiology',
    'Valkyr Aspect': 'Divine Intervention',
  };

  // savant means no race traits
  if (savant) {
    return [specialTraits[race], false];
  }

  let random = Math.floor(Math.random() * 4);

  let traits = [specialTraits[race], raceTraits[race][random]];

  // handle specific case for Iquoran Inheritance
  if (race === 'Iquoran' && random === 2) {
    random = Math.floor(Math.random() * 8);
    if (random <= 3) {
      let inheritedTrait = raceTraits.Equirion[random];
      traits[2] = 'Equirion: '.concat(inheritedTrait);
      traits[3] = inheritedTrait;
    } else {
      let inheritedTrait = raceTraits.Human[random - 4];
      traits[2] = 'Human: '.concat(inheritedTrait);
      traits[3] = inheritedTrait;
    }
  }

  // handle specific case for Khibblan Inheritance
  if (race === 'Khibblan' && random === 1) {
    random = Math.floor(Math.random() * 8);
    if (random <= 3) {
      let inheritedTrait = raceTraits.Arkhan[random];
      traits[2] = 'Arkhan: '.concat(inheritedTrait);
      traits[3] = inheritedTrait;
    } else {
      let inheritedTrait = raceTraits.Fibblan[random - 4];
      traits[2] = 'Fibblan: '.concat(inheritedTrait);
      traits[3] = inheritedTrait;
    }
  }

  // handle specific case for Path of the Valkyr
  if (race === 'Valkyr Aspect' && random === 3) {
    const paths = ['Knight', 'Lancer', 'Slayer', 'Sorceror'];
    traits[1] += ' - ';
    let randomPath = Math.floor(Math.random() * paths.length);
    traits[1] += paths[randomPath];
  }

  return traits;
};

const assignSpecialRaceTrait = (race) => {
  const specialTraits = {
    Arkhan: 'Arkhan Physiology',
    Equirion: 'Equirion Physiology',
    Fibblan: 'Fibblan Physiology',
    Human: 'The Hardworking',
    Iquoran: 'Iquoran Physiology',
    Khibblan: 'Khibblan Physiology',
    Chezan: 'Great Shadow Infection',
    Cubi: 'Insatiable Lust',
    Felia: 'Felesian Ancestry',
    Jarrith: 'Jarrith Psysiology',
    Lich: 'Phylactery',
    Merfolk: 'Hydration',
    'True Banshee': 'Ghastly Physiology',
    'Valkyr Aspect': 'Divine Intervention',
  };
  return specialTraits[race] || false;
};


// function to handle special cases that grant extra skills
const assignSpecialSkills = (trait = '', skills = [], level = 1) => {
  let newSkills = skills.slice();

  if (trait === 'Accomplished Worker') {
    let modifier = level - Math.floor((level - 1) / 2);
    newSkills = assignSkills(level, modifier);
  } else if (trait === 'Scrappy Fighter') {
    newSkills.push('Special: Bite');
    newSkills.push('Special: Claw');
  } else if (trait === 'Jarrith Breath' || trait === 'Death Wail' || trait === 'Touch of Death') {
    newSkills.push(trait);
  }

  return newSkills;
};

// Function to assign a profession. Returns an array.
const assignProfession = (valkyr = false, likelihood = 'maybe') => {
  // If no profession is desired, assign it only to valkyrs
  if (likelihood === 'no') {
    if (valkyr) {
      return ['Special Cleric'];
    }
    return ['None'];
  }

  const allProfessions = {
    1: 'Apothecary',
    2: 'Blacksmith',
    3: 'Chef',
    4: 'Cleric',
    5: 'Engineer',
    6: 'Medic',
    7: 'Merchant',
    8: 'Professor',
    9: 'Soldier',
    10: 'Tailor',
    11: 'Witch / Wizard',
  };

  // there are 11 possible by default.
  let totalPossible = 11;
  // if they aren't sure, multiply denominator by 2
  if (likelihood === 'maybe') {
    totalPossible *= 2;
  }

  let random = Math.ceil(Math.random() * totalPossible);
  let professionsAssigned = [];
  if (valkyr && random === 4) { // valkyrs are automatically clerics, special only
    professionsAssigned = ['Special Cleric'];
  } else if (random < 12) { // assign a trait
    professionsAssigned.push(allProfessions[random]);
    if (valkyr) { // valkyrs are automatically clerics in addition to other professions
      professionsAssigned.push('Special Cleric');
    }
  } else if (valkyr) { // valkyrs are automatically clerics
    professionsAssigned.push('Special Cleric');
  } else { // if selected number outside range, there is no profession
    professionsAssigned.push('None');
  }

  return professionsAssigned;
};

const chooseClassPath = (characterClass, likelihood = 100) => {
  const characterPaths = {
    'Artillery Jockey': ['Jockey', 'Demolitionist', 'Arsenal'],
    'Crush Avatar': ['Avatar', 'Brawler', 'Monk'],
    'Doom Harbinger': ['Harbinger', 'Terror', 'Unrelenting'],
    'Infernal Reaper': ['Reaper', 'Death', 'Souls'],
    'Arcane Ranger': ['Ranger', 'Sniper', 'Scout'],
    'Blood Letterer': ['Letterer', 'Decay', 'Suffering'],
    'Cross Assailant': ['Assailant', 'Deceit', 'Execution'],
    'Essence Abolisher': ['Abolisher', 'Seizure', 'Debilitation'],
    'Divine Sentinel': ['Sentinel', 'Sanctity', 'Judgment'],
    'Flow Assimilator': ['Assimilator', 'Amplification', 'Ringleader'],
    'Flow Rupturer': ['Rupturer', 'Control', 'Destruction'],
    'Soul Morpher': ['Morpher', 'Beastmaster', 'Kelpa'],
    'Crusade Maestro': ['Maestro', 'Inspiration', 'Deterrence'],
    'Empyreal Ronin': ['Ronin', 'Bushi', 'Vagabond'],
    'Noble Gallant': ['Gallant', 'Grappler', 'Mountain'],
    'Runic Chevalier': ['Chevalier', 'Elementalist', 'Fencer'],
    'Mystic Gunslinger': ['Gunslinger', 'Sharpshooter', 'Munitions'],
    'Resolute Champion': ['Champion', 'Gladiator', 'Defender'],
    'Glorious Hunter': ['Hunter', 'Glory', 'Predator'],
    'Twilight Sentry': ['Sentry', 'Might', 'Sorcery'],
  };
  let totalPossible = 3;
  if (likelihood === 0) {
    return 'None';
  }
  if (likelihood < 100) {
    totalPossible = Math.floor((100 / likelihood) * totalPossible);
  }
  let random = Math.floor(Math.random() * totalPossible);

  return characterPaths[characterClass][random] || 'None';
};

// function to assign a personality. Returns an object.
const assignPersonality = () => {
  const personalities = {
    1: {
      personalityTrait: 'Caregiver',
      firstForte: 'Compassionate',
      secondForte: 'Generous',
      flaw: 'Self-Sacrificial',
    },
    2: {
      personalityTrait: 'Creator',
      firstForte: 'Creative',
      secondForte: 'Perservenent',
      flaw: 'Perfectionist',
    },
    3: {
      personalityTrait: 'Dreamer',
      firstForte: 'Hopeful',
      secondForte: 'Cheerful',
      flaw: 'Naive',
    },
    4: {
      personalityTrait: 'Everyman',
      firstForte: 'Adaptive',
      secondForte: 'Empathetic',
      flaw: 'Submissive',
    },
    5: {
      personalityTrait: 'Hero',
      firstForte: 'Courageous',
      secondForte: 'Vigilant',
      flaw: 'Arrogant',
    },
    6: {
      personalityTrait: 'Individualist',
      firstForte: 'Incorruptible',
      secondForte: 'Adventurous',
      flaw: 'Stubborn',
    },
    7: {
      personalityTrait: 'Jester',
      firstForte: 'Joyous',
      secondForte: 'Funny',
      flaw: 'Frivolous',
    },
    8: {
      personalityTrait: 'Leader',
      firstForte: 'Responsible',
      secondForte: 'Confident',
      flaw: 'Authoritative',
    },
    9: {
      personalityTrait: 'Partner',
      firstForte: 'Passionate',
      secondForte: 'Committed',
      flaw: 'Anxious',
    },
    10: {
      personalityTrait: 'Rebel',
      firstForte: 'Unpredictable',
      secondForte: 'Resourceful',
      flaw: 'Short-Tempered',
    },
    11: {
      personalityTrait: 'Thinker',
      firstForte: 'Logical',
      secondForte: 'Realistic',
      flaw: 'Overcautious',
    },
    12: {
      personalityTrait: 'Visionary',
      firstForte: 'Ambitious',
      secondForte: 'Brilliant',
      flaw: 'Manipulative',
    },
  };

  return personalities[Math.ceil(Math.random() * 12)];
};

// function to assign experience values
const assignExperience = (level = 1, random = false) => {
  let start = levelExperienceEndpoints[level][0];
  let end = levelExperienceEndpoints[level][1];
  let range = end - start;
  if (random) {
    return Math.min(Math.floor(Math.random() * range, Math.random() * range)) + start;
  }
  return start;
};

// function to assign divine figures
const assignDivineFigures = (professions = []) => {
  if (professions.length === 0 || (professions.length === 1 && professions[0] !== 'Cleric' && professions[0] !== 'Special Cleric')) {
    return [];
  }
  if (professions.length > 1 || professions[0] === 'Special Cleric') {
    // Assign special and return
    return ['Amandra'];
  }
  const gods = ['Altina', 'Orulan', 'Yunarelle', 'Vandra'];
  const deities = {
    Altina: ['Anselet', 'Joetta', 'Owini', 'Simkin'],
    Orulan: ['Emory', 'Gervaise', 'Josselyn', 'Kristene'],
    Yunarelle: ['Arturus', 'Edeline', 'Evardin', 'Lunette'],
    Vandra: ['Gilbard', 'Gwenor', 'Keida', 'Rotgar'],
  };
  const god = gods[Math.floor(Math.random() * gods.length)];
  const deity = deities[god][Math.floor(Math.random() * deities[god].length)];
  return [god, deity];
};

const assignPrayerPoints = (level) => {
  if (level >= 8) {
    return 20;
  }
  let points = 6;
  for (let i = 1; i < level; i += 1) {
    points += 2;
  }
  return points;
};

const createCharacter = (
  maxLevel = 20,
  desiredLevel = false,
  desiredRace = false,
  desiredClass = false,
  nativeClassDesired = false,
  rankQualities = false,
  obs = 1,
  char = 1,
  wis = 1,
  rankAttributes = false,
  str = 1,
  spr = 1,
  vit = 1,
  dex = 1,
  agi = 1,
  minimumTotalAttributes = 40,
  minimumTotalQualities = 24,
  defaultStats = true,
  professionLikelihood = 'maybe',
) => {
  let level = assignLevel(maxLevel, desiredLevel);
  let race = chooseRace(desiredRace);
  let characterClass = chooseClass(nativeClassDesired ? race : false, desiredClass);
  let native = checkForNativeClass(race[1], characterClass);
  let nativeClassBonus = native ? provideNativeClassBonus(characterClass) : false;
  let traits = chooseTraits(
    level,
    race[1] === 'Human',
    nativeClassBonus === 'Ancestral Pride' || nativeClassBonus === 'Adaptation'
      ? nativeClassBonus
      : false,
  );
  let savant = traits.length === 1;
  if (savant && nativeClassBonus) {
    [nativeClassBonus] = traits;
  }
  let raceTrait = assignRaceTrait(race[1], savant);
  let qualities = assignQualities(
    rankQualities,
    obs,
    char,
    wis,
    savant,
    minimumTotalQualities,
    defaultStats,
    raceTrait[1] === 'Prodigious',
  );
  let attributes = assignAttributes(
    rankAttributes,
    str,
    spr,
    vit,
    dex,
    agi,
    savant,
    minimumTotalAttributes,
    defaultStats,
    raceTrait[1] === 'Prodigious',
  );
  let skills = assignSkills(level);
  skills = assignSpecialSkills(raceTrait[1], skills, level);
  let professions = assignProfession(race[1] === 'Valkyr Aspect', professionLikelihood);
  let classPath = chooseClassPath(characterClass);
  let personality = assignPersonality();
  let experience = assignExperience(level, !desiredLevel);
  let divineFigures = assignDivineFigures(professions);
  let prayerPoints = assignPrayerPoints(level);
  let character = {
    level,
    race: race[1],
    characterClass,
    nativeClassBonus,
    classPath,
    divineFigures,
    experience,
    personality,
    prayerPoints,
    professions,
    raceTrait,
    skills,
    traits,
    qualities,
    attributes,
  };
  return character;
};

module.exports = {
  createCharacter,
};
