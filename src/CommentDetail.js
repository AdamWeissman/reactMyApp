import React from 'react';

//you don't have to write props, can write properties or whatever

const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.writer}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
    </div>
  )
}

export default CommentDetail;