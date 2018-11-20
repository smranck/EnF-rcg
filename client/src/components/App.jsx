import React from 'react';
import Helpers from '../CharacterCreationHelpers';
import Character from './Character';
import Settings from './Settings';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLevel: 20,
      desiredLevel: false,
      originalsOnly: false,
      desiredClass: false,
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
      skills: [],
      traits: '',
      qualities: {},
      attributes: {},
      nativeClassBonus: '',
      characterGenerated: false,
      totalCharacters: 0,
      professionLikelihood: 'maybe',
    };
  }

  changeDesiredLevel(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
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
      desiredLevel,
      originalsOnly,
      desiredClass,
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
      desiredLevel,
      originalsOnly,
      desiredClass,
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
    console.log(character);

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
      skills,
    } = character;

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
      skills,
      qualities,
      attributes,
      characterGenerated,
      totalCharacters,
    });
  }

  render() {
    const {
      level,
      desiredLevel,
      race,
      characterClass,
      classPath,
      nativeClassBonus,
      personality,
      professions,
      raceTrait,
      traits,
      skills,
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
              skills={skills}
              attributes={attributes}
              qualities={qualities}
              totalCharacters={totalCharacters}
              desiredLevel={desiredLevel}
              changeDesiredLevel={e => this.changeDesiredLevel(e)}
              defaultStats={defaultStats}
              nativeRace={nativeRace}
              handleCheckmarkForms={e => this.handleCheckmarkForms(e)}
              professionLikelihood={professionLikelihood}
              handleSelectorForms={e => this.handleSelectorForms(e)}
              characterGenerated={characterGenerated}
            />
          </div>
        ) : (
          <div>
            <Settings
              desiredLevel={desiredLevel}
              changeDesiredLevel={e => this.changeDesiredLevel(e)}
              defaultStats={defaultStats}
              nativeRace={nativeRace}
              handleCheckmarkForms={e => this.handleCheckmarkForms(e)}
              professionLikelihood={professionLikelihood}
              handleSelectorForms={e => this.handleSelectorForms(e)}
              characterGenerated={characterGenerated}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
