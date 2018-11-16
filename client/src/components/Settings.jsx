import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
  render() {
    const {
      desiredLevel,
      changeDesiredLevel,
      defaultStats,
      nativeRace,
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
            Desired Level?
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
          <label htmlFor="defaultStatsCheckbox">
            Default Stats?
            <sup>*</sup>
            <input
              name="defaultStats"
              type="checkbox"
              checked={defaultStats}
              onChange={e => handleCheckmarkForms(e)}
            />
          </label>
          <br />
          <label htmlFor="nativeRaceCheckbox">
            Native Class?
            <sup>**</sup>
            <input
              name="nativeRace"
              type="checkbox"
              checked={nativeRace}
              onChange={e => handleCheckmarkForms(e)}
            />
          </label>
          <br />
          <label>
            Profession?
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
