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
      divineFigures,
      experience,
      nativeClassBonus,
      personality,
      prayerPoints,
      professions,
      raceTrait,
      traits,
      skills,
      qualities,
      attributes,
      totalCharacters,
      desiredClass,
      changeDesiredClass,
      desiredLevel,
      changeDesiredLevel,
      desiredRace,
      changeDesiredRace,
      defaultStats,
      nativeClassDesired,
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
                    Base Attributes
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
                  <td className="italic">Points Remaining</td>
                  <td>{Math.floor(level / 5) || '-'}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="statHeader">
                    Base Qualities
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
                <tr>
                  <td className="italic">Points Remaining</td>
                  <td>{Math.floor(level / 5) || '-'}</td>
                </tr>
              </tbody>
            </table>
            <div className="clearer" />
            <Settings
              desiredClass={desiredClass}
              changeDesiredClass={changeDesiredClass}
              desiredLevel={desiredLevel}
              changeDesiredLevel={e => changeDesiredLevel(e)}
              desiredRace={desiredRace}
              changeDesiredRace={e => changeDesiredRace(e)}
              defaultStats={defaultStats}
              nativeClassDesired={nativeClassDesired}
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
                  <td>Experience</td>
                  <td>{experience}</td>
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
                {raceTrait.length === 4 ? (
                  <tr>
                    <td>Inherited Trait</td>
                    <td>{raceTrait[2]}</td>
                  </tr>
                ) : null}
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
                  <td>Profession</td>
                  <td>{professions[0]}</td>
                </tr>
                {divineFigures.length ? (
                  <tr>
                    <td>God</td>
                    <td>{divineFigures[0]}</td>
                  </tr>
                ) : null}
                {divineFigures.length === 2 ? (
                  <tr>
                    <td>Deity</td>
                    <td>{divineFigures[1]}</td>
                  </tr>
                ) : null}
                {divineFigures.length ? (
                  <tr>
                    <td>Prayer Points</td>
                    <td>{prayerPoints}</td>
                  </tr>
                ) : null}
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
