import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Views/Menu/Clock';
import App from './Models/App';

var app = new App();

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);