import React from 'react';
import Helpers from '../CharacterCreationHelpers';
import Character from './Character';
import Settings from './Settings';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLevel: 20,
      originalsOnly: false,
      nativeRace: false,
      rankQualities: false,
      obs: 1,
      char: 1,
      wis: 1,
      rankAttributes: false,
      str: 1,
      spr: 1,
      vit: 1,
      dex: 1,
      agi: 1,
      minimumTotalAttributes: 40,
      minimumTotalQualities: 24,
      defaultStats: true,
      level: 1,
      race: '',
      raceTrait: [],
      traits: '',
      qualities: {},
      attributes: {},
      nativeClassBonus: '',
      characterGenerated: false,
      totalCharacters: 0,
      professionLikelihood: 'maybe',
    };
  }

  handleCheckmarkForms(event) {
    const { target } = event;
    const value = !!target.checked;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSelectorForms(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  generateCharacter() {
    let {
      maxLevel,
      originalsOnly,
      nativeRace,
      rankQualities,
      obs,
      char,
      wis,
      rankAttributes,
      str,
      spr,
      vit,
      dex,
      agi,
      minimumTotalAttributes,
      minimumTotalQualities,
      defaultStats,
      professionLikelihood,
    } = this.state;

    let character = Helpers.createCharacter(
      maxLevel,
      originalsOnly,
      nativeRace,
      rankQualities,
      obs,
      char,
      wis,
      rankAttributes,
      str,
      spr,
      vit,
      dex,
      agi,
      minimumTotalAttributes,
      minimumTotalQualities,
      defaultStats,
      professionLikelihood,
    );
    const {
      level,
      race,
      characterClass,
      classPath,
      nativeClassBonus,
      personality,
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
      classPath,
      nativeClassBonus,
      personality,
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
      classPath,
      nativeClassBonus,
      personality,
      professions,
      raceTrait,
      traits,
      qualities,
      attributes,
      characterGenerated,
      totalCharacters,
      defaultStats,
      nativeRace,
      professionLikelihood,
    } = this.state;

    return (
      <div className="container">
        <button
          type="submit"
          className="generate-character-button"
          onClick={e => this.generateCharacter(e)}
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
              classPath={classPath}
              nativeClassBonus={nativeClassBonus}
              personality={personality}
              professions={professions}
              raceTrait={raceTrait}
              traits={traits}
              attributes={attributes}
              qualities={qualities}
              totalCharacters={totalCharacters}
              defaultStats={defaultStats}
              nativeRace={nativeRace}
              handleCheckmarkForms={e => this.handleCheckmarkForms(e)}
              professionLikelihood={professionLikelihood}
              handleSelectorForms={e => this.handleSelectorForms(e)}
            />
          </div>
        ) : (
          <div>
            <Settings
              defaultStats={defaultStats}
              nativeRace={nativeRace}
              handleCheckmarkForms={e => this.handleCheckmarkForms(e)}
              professionLikelihood={professionLikelihood}
              handleSelectorForms={e => this.handleSelectorForms(e)}
            />
          </div>
        )}
        <div className="footer">
          <div>
            Random Character Generator for
            {' '}
            <a href="https://sinowl.net/ebbandflow/" rel="noopener noreferrer" target="_blank">
              the Game of Ebb and Flow
            </a>
            {', '}
            source code available
            {' '}
            <a href="https://github.com/smranck/EnF-rcg" rel="noopener noreferrer" target="_blank">
              here
            </a>
          </div>
          <div className="smaller">
            *While Default Stats is selected, Attributes will sum to 40 and Qualities will sum to 24
          </div>
          <div className="smaller">
            **While Native Classes Only is selected, assigned class will always be native to
            assigned race
          </div>
        </div>
      </div>
    );
  }
}
