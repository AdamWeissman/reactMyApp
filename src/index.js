// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component


// the first bracket indicates that we want to reference a JS variable inside of JSX
// the second inner bracket reveals a JS object
function getButtonText() {
  return 'Click on me!';
}

const App = () => {

  const buttonText = "You can put a string, a number, or an array that will be concatenated, BUT NOT A JS OBJECT";
  // for example, you cannot assign buttonText to something like this: { text: 'Click Me' }...
  // HOWEVER!!! you can assign to { text: "CLICK ME" } only if you call it as buttonText.text

  const buttonText2 = { someWords: "SOME WORDS"}
  const style = { backgroundColor: 'blue', color: 'white'}; //this line can replace the inner object brackets for style
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {buttonText2.someWords}
      </button>
    </div>
  )
}

// const Cat = () => {
//   return <div>MEOW!</div>
// }

// Take the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

// ReactDOM.render(
//   <Cat />,
//   document.querySelector('#cat')
// );