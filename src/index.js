// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 
import faker from 'faker';


const App = () => {
  return (


    <div className="ui container comments">

      <ApprovalCard>
        <h4>WARNING</h4>
        <div>Are  you sure you want to do this?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          writer="Sam"
          timeAgo="Today at 4:45PM"
          content="NICE!"
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        writer="Alex"
        timeAgo="Today at 2:35PM"
        content="Cool post!"
        avatar={faker.image.avatar()}
       />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          writer="Jane"
          timeAgo="Today at 1:15PM"
          content="Locals can't believe this car insurance secret."
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>  
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))