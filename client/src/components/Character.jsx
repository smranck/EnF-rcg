import React from 'react';
import Settings from './Settings';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
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
      skills,
      qualities,
      attributes,
      totalCharacters,
      desiredLevel,
      changeDesiredLevel,
      defaultStats,
      nativeRace,
      handleCheckmarkForms,
      professionLikelihood,
      handleSelectorForms,
      characterGenerated,
    } = this.props;

    const {
      str, spr, vit, dex, agi,
    } = attributes;
    const { obs, char, wis } = qualities;
    const {
      personalityTrait, firstForte, secondForte, flaw,
    } = personality;

    return (
      <div id="character-container">
        <div className="table-container">
          <span className="container-divider">
            <table className="character-stats">
              <thead>
                <tr>
                  <th colSpan="2"> Character Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="statHeader">
                    Attributes
                  </td>
                </tr>
                <tr>
                  <td>Spirit</td>
                  <td>{spr}</td>
                </tr>
                <tr>
                  <td>Vitality</td>
                  <td>{vit}</td>
                </tr>
                <tr>
                  <td>Agility</td>
                  <td>{agi}</td>
                </tr>
                <tr>
                  <td>Dexterity</td>
                  <td>{dex}</td>
                </tr>
                <tr>
                  <td>Strength</td>
                  <td>{str}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="statHeader">
                    Qualities
                  </td>
                </tr>
                <tr>
                  <td>Observation</td>
                  <td>{obs}</td>
                </tr>
                <tr>
                  <td>Charisma</td>
                  <td>{char}</td>
                </tr>
                <tr>
                  <td>Wisdom</td>
                  <td>{wis}</td>
                </tr>
              </tbody>
            </table>
            <div className="clearer" />
            <Settings
              desiredLevel={desiredLevel}
              changeDesiredLevel={e => changeDesiredLevel(e)}
              defaultStats={defaultStats}
              nativeRace={nativeRace}
              handleCheckmarkForms={e => handleCheckmarkForms(e)}
              professionLikelihood={professionLikelihood}
              handleSelectorForms={e => handleSelectorForms(e)}
              characterGenerated={characterGenerated}
            />
          </span>
          <span className="container-divider">
            <table className="character-details">
              <thead>
                <tr>
                  <th colSpan="2">Character Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level</td>
                  <td>{level}</td>
                </tr>
                <tr>
                  <td>Race</td>
                  <td>{race}</td>
                </tr>
                <tr>
                  <td>Special Trait</td>
                  <td>{raceTrait[0]}</td>
                </tr>
                <tr>
                  <td>Race Trait</td>
                  <td>{raceTrait[1] || traits[0]}</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{characterClass}</td>
                </tr>
                <tr>
                  <td>Skills</td>
                  <td>
                    {skills.reduce((result, item, index) => {
                      let added = result;
                      added += item;
                      if (index < skills.length - 1) {
                        added += ', ';
                      }
                      return added;
                    }, '')}
                  </td>
                </tr>
                <tr>
                  <td>Class Path</td>
                  <td>{classPath}</td>
                </tr>
                <tr>
                  <td>Class Path Stage</td>
                  <td>{Math.floor(level / 2)}</td>
                </tr>
                <tr>
                  <td>Native Class Bonus</td>
                  <td>{nativeClassBonus || 'None'}</td>
                </tr>
                <tr>
                  <td>Attribute Points Remaining</td>
                  <td>{Math.floor(level / 5)}</td>
                </tr>
                <tr>
                  <td>Quality Points Remaining</td>
                  <td>{Math.floor(level / 5)}</td>
                </tr>
                <tr>
                  <td>Profession</td>
                  <td>{professions[0]}</td>
                </tr>
                <tr>
                  <td>Personality Trait</td>
                  <td>{personalityTrait}</td>
                </tr>
                <tr>
                  <td>Personality Forte</td>
                  <td>{firstForte}</td>
                </tr>
                <tr>
                  <td>Personality Forte</td>
                  <td>{secondForte}</td>
                </tr>
                <tr>
                  <td>Personality Flaw</td>
                  <td>{flaw}</td>
                </tr>
                {race === 'Valkyr Aspect' ? (
                  <tr>
                    <td>Valkyr Aspect Special Profession</td>
                    <td>{professions[0]}</td>
                  </tr>
                ) : null}
                {traits.map(trait => (
                  <tr key={trait}>
                    <td>Trait</td>
                    <td>{trait}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total Generated</td>
                  <td>{totalCharacters}</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </div>
    );
  }
}
