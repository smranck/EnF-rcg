import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Character extends React.Component {
  render() {
    const { defaultStats, nativeRace, handleInputChange } = this.props;
    return (
      <div className="settings">
        <span id="settingsHeader">Settings</span>
        <form>
          <label htmlFor="defaultStatsCheckbox">
            Default Stats?
            <input
              name="defaultStats"
              type="checkbox"
              checked={defaultStats}
              onChange={e => handleInputChange(e)}
            />
          </label>
          <br />
          <label htmlFor="nativeRaceCheckbox">
            Native Classes Only?
            <input
              name="nativeRace"
              type="checkbox"
              checked={nativeRace}
              onChange={e => handleInputChange(e)}
            />
          </label>
        </form>
      </div>
    );
  }
}
