// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        writer="Sam"
        timeAgo="Today at 4:45PM"
        content="NICE!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        writer="Alex"
        timeAgo="Today at 2:35PM"
        content="Cool post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        writer="Jane"
        timeAgo="Today at 1:15PM"
        content="Locals can't believe this car insurance secret."
        avatar={faker.image.avatar()} 
      />
    </div>  
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))