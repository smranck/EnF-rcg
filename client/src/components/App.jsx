import React from 'react';
import Helpers from '../CharacterCreationHelpers';

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
      characterGenerated: false,
    };
  }

  generateCharacter() {
    let character = Helpers.createCharacter();
    const {
      level, race, characterClass, raceTrait, traits, qualities, attributes,
    } = character;
    console.log(character);
    let characterGenerated = true;
    this.setState({
      level,
      race,
      characterClass,
      raceTrait,
      traits,
      qualities,
      attributes,
      characterGenerated,
    });
  }

  render() {
    const { characterGenerated } = this.state;
    return (
      <div>
        <div>Lorum Ipsum</div>
        <div>
          This will be a random character Generator for the game found at
          https://sinowl.net/ebbandflow/
        </div>
        {characterGenerated ? (
          <div>Check the console for your new character</div>
        ) : (
          <div>This is where your character would render!</div>
        )}
        <button type="submit" onClick={() => this.generateCharacter()}>
          {' '}
          Create a new Character
          {' '}
        </button>
      </div>
    );
  }
}
