import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
  render() {
    const { defaultStats, nativeRace, handleCheckmarkForms } = this.props;
    return (
      <div className="settings">
        <span id="settingsHeader">Settings</span>
        <br />
        <form>
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
            Native Classes Only?
            <sup>**</sup>
            <input
              name="nativeRace"
              type="checkbox"
              checked={nativeRace}
              onChange={e => handleCheckmarkForms(e)}
            />
          </label>
        </form>
      </div>
    );
  }
}
