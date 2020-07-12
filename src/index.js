// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

const App = () => {
  return <div>Hi there!</div>
}

const Cat = () => {
  return <div>MEOW!</div>
}

// Take the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

ReactDOM.render(
  <Cat />,
  document.querySelector('#cat'),
);