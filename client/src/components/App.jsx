import React from 'react';
import Helpers from '../characterCreationHelpers';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterGenerated: false,
      nativePreference: false,
      originalClasses: false,
      maxLevel: 20,
      level: 1,
      race: ['Race Not Assigned', 'Race Not Assigned'],
      raceObject: {}, // this will be gotten eventually, won't need race above
      class: '',
      skills: {},
      skillsModifier: 0,
      qualities: [],
      attributes: [],
      str: 10,
      spr: 10,
      vit: 10,
      dex: 10,
      agi: 10,
    };
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
          <div>This is where your character would render!</div>
        ) : (
          <div>Once you make a character, it will render here!</div>
        )}
      </div>
    );
  }
}
