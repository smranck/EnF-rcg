import React from 'react';
import Helpers from '../CharacterCreationHelpers';
import Character from './Character';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // characterGenerated: false,
      // nativePreference: false,
      // originalClasses: false,
      // maxLevel: 20,
      // level: 1,
      // race: ['Race Not Assigned', 'Race Not Assigned'],
      // raceObject: {}, // this will be gotten eventually, won't need race above
      // class: '',
      // skills: {},
      // skillsModifier: 0,
      // qualities: [],
      // attributes: [],
      // str: 10,
      // spr: 10,
      // vit: 10,
      // dex: 10,
      // agi: 10,
      level: 1,
      race: '',
      raceTrait: [],
      traits: '',
      qualities: {},
      attributes: {},
      nativeClassBonus: '',
      characterGenerated: false,
      totalCharacters: 0,
    };
  }

  generateCharacter() {
    let character = Helpers.createCharacter();
    const {
      level,
      race,
      characterClass,
      nativeClassBonus,
      professions,
      raceTrait,
      traits,
      qualities,
      attributes,
    } = character;
    console.log(character);
    let characterGenerated = true;
    let { totalCharacters } = this.state;
    totalCharacters += 1;
    this.setState({
      level,
      race,
      characterClass,
      nativeClassBonus,
      professions,
      raceTrait,
      traits,
      qualities,
      attributes,
      characterGenerated,
      totalCharacters,
    });
  }

  render() {
    const {
      level,
      race,
      characterClass,
      nativeClassBonus,
      professions,
      raceTrait,
      traits,
      qualities,
      attributes,
      characterGenerated,
      totalCharacters,
    } = this.state;

    return (
      <div className="container">
        <div>
          Random Character Generator for
          {' '}
          <a href="https://sinowl.net/ebbandflow/" rel="noopener noreferrer" target="_blank">
            the Game of Ebb and Flow
          </a>
        </div>
        <button
          type="submit"
          className="generate-character-button"
          onClick={() => this.generateCharacter()}
        >
          {' '}
          Create a new Character
          {' '}
        </button>
        {characterGenerated ? (
          <div>
            <Character
              key={totalCharacters}
              level={level}
              race={race}
              characterClass={characterClass}
              nativeClassBonus={nativeClassBonus}
              professions={professions}
              raceTrait={raceTrait}
              traits={traits}
              attributes={attributes}
              qualities={qualities}
              totalCharacters={totalCharacters}
            />
          </div>
        ) : (
          <div>Click the Button to generate a random character!</div>
        )}
      </div>
    );
  }
}
