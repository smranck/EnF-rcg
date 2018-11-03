import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
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
      totalCharacters,
    } = this.props;

    const {
      str, spr, vit, dex, agi,
    } = attributes;
    const { obs, char, wis } = qualities;

    return (
      <div className="character">
        <table className="character-display">
          <thead>
            <tr>
              <th>Property</th>
              <th>Your Randomly Generated Value</th>
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
              <td>Native Class Bonus</td>
              <td>{nativeClassBonus || 'None'}</td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>{str}</td>
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
              <td>Dexterity</td>
              <td>{dex}</td>
            </tr>
            <tr>
              <td>Agility</td>
              <td>{agi}</td>
            </tr>
            <tr>
              <td>Attribute Points to Distribute:</td>
              <td>{Math.floor(level / 5)}</td>
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
              <td>Quality Points to Distribute</td>
              <td>{Math.floor(level / 5)}</td>
            </tr>
            <tr>
              <td>Profession</td>
              <td>{professions[0]}</td>
            </tr>
            {race === 'Valkyr Aspect' ? (
              <tr>
                <td>Valkyr Aspect Special Profession</td>
                <td>{professions[1]}</td>
              </tr>
            ) : null}
            {traits.map(trait => (
              <tr key={trait}>
                <td>Trait</td>
                <td>{trait}</td>
              </tr>
            ))}
            <tr>
              <td>Total Characters Generated</td>
              <td>{totalCharacters}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
