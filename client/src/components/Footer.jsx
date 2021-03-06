import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends React.Component {
  render() {
    return (
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
      </div>
    );
  }
}
