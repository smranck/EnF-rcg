import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
  render() {
    const {
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

    return (
      <div className={`settings${characterGenerated ? '' : ' pregenerated'}`}>
        <span id="settingsHeader">Settings</span>
        <br />
        <form>
          <label>
            <span className="left">Level</span>
            <select
              value={desiredLevel || 'Any'}
              name="desiredLevel"
              onChange={e => changeDesiredLevel(e)}
            >
              <option value="False">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>
          <br />
          <label>
            <span className="left">Race</span>
            <select
              value={desiredRace || 'Any'}
              name="desiredRace"
              onChange={e => changeDesiredRace(e)}
            >
              <option value="False">Any</option>
              <option value="originalsOnly">Original 6 Only</option>
              <option value="0">Arkhan</option>
              <option value="1">Equirion</option>
              <option value="2">Fibblan</option>
              <option value="3">Human</option>
              <option value="4">Iquoran</option>
              <option value="5">Khibblan</option>
              <option value="6">Chezan</option>
              <option value="7">Cubi</option>
              <option value="8">Felia</option>
              <option value="9">Jarrith</option>
              <option value="10">Lich</option>
              <option value="11">Merfolk</option>
              <option value="12">True Banshee</option>
              <option value="13">Valkyr Aspect</option>
            </select>
          </label>
          <br />
          <label>
            <span className="left">Class</span>
            <select
              value={desiredClass || 'Any'}
              name="desiredClass"
              onChange={e => changeDesiredClass(e)}
            >
              <option value="False">Any</option>
              <option value="1">Artillery Jockey</option>
              <option value="2">Crush Avatar</option>
              <option value="3">Doom Harbinger</option>
              <option value="4">Infernal Reaper</option>
              <option value="5">Arcane Ranger</option>
              <option value="6">Blood Letterer</option>
              <option value="7">Cross Assailant</option>
              <option value="8">Essence Abolisher</option>
              <option value="9">Divine Sentinel</option>
              <option value="10">Flow Assimilator</option>
              <option value="11">Flow Rupturer</option>
              <option value="12">Soul Morpher</option>
              <option value="13">Crusade Maestro</option>
              <option value="14">Empyreal Ronin</option>
              <option value="15">Noble Gallant</option>
              <option value="16">Runic Chevalier</option>
              <option value="17">Mystic Gunslinger</option>
              <option value="18">Resolute Champion</option>
              <option value="19">Glorious Hunter</option>
              <option value="20">Twilight Sentry</option>
            </select>
          </label>
          <br />
          <label htmlFor="defaultStatsCheckbox">
            <span className="left">Default Stats</span>
            <sup className="tooltip">
              <span>[?]</span>
              <span className="tooltiptext">
                While selected, Base Attributes sum to 40 and Base Qualities sum to 24
              </span>
            </sup>
            <input
              name="defaultStats"
              type="checkbox"
              checked={defaultStats}
              onChange={e => handleCheckmarkForms(e)}
            />
          </label>
          <br />
          <label htmlFor="nativeClassDesiredCheckbox">
            <span className="left">Native Class</span>
            <sup className="tooltip">
              <span>[?]</span>
              <span className="tooltiptext">
                Select to limit assignable classes to those native to assigned race
              </span>
            </sup>
            <input
              name="nativeClassDesired"
              type="checkbox"
              checked={nativeClassDesired}
              onChange={e => handleCheckmarkForms(e)}
            />
          </label>
          <br />
          <label>
            <span className="left">Profession</span>
            <select
              value={professionLikelihood}
              name="professionLikelihood"
              onChange={e => handleSelectorForms(e)}
            >
              <option value="yes">Yes</option>
              <option value="maybe">Maybe</option>
              <option value="no">No</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
