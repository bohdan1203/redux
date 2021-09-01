import React from "react";
import Comment from "../images/icons/comment.svg";
import Repost from "../images/icons/repost.svg";
import Like from "../images/icons/like.svg";
import Share from "../images/icons/share.svg";

const Post = (props) => {
  console.log(props);
  return (
    <div className="post">
      <img className="avatar" src={props.avatar} />
      <div className="container">
        <div className="name-nickname-date">
          <a href="#" className="link color-white">
            <b>{props.name}</b>
          </a>
          <a href="#" className="link">
            {props.nickname}
          </a>
          <a href="#" className="link">
            {props.date}
          </a>
        </div>
        <p className="text color-white">{props.postText}</p>
        <img className="post-picture" src={props.postPicture} />
        <div className="reactions">
          <a href="#" className="reaction">
            <img className="icon" src={Comment} />
            <p>{props.comments}</p>
          </a>
          <a href="#" className="reaction">
            <img className="icon" src={Repost} />
            <p>{props.reposts}</p>
          </a>
          <a href="#" className="reaction">
            <img className="icon" src={Like} />
            <p>{props.likes}</p>
          </a>
          <a href="#" className="reaction">
            <img className="icon" src={Share} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
