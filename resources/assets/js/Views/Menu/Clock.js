import React from 'react';
import App from '../../Models/App';

export default class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {app.time}.</h2>
      </div>
    );
  }
}