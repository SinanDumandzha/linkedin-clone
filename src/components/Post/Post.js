import React from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
import InputItems from "../InputItems/InputItems";
import { faThumbsUp, faComment, faShare, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Post = ({ name, desc, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar img={photoUrl} alt={name} height="45" width="45" />
        <div className="post__info">
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputItems icon={faThumbsUp} color="rgb(128, 128, 128)" title="Like" size="lg" />
        <InputItems icon={faComment} color="rgb(128, 128, 128)" title="Comment" size="lg" />
        <InputItems icon={faShare} color="rgb(128, 128, 128)" title="Share" size="lg" />
        <InputItems icon={faPaperPlane} color="rgb(128, 128, 128)" title="Send" size="lg" />
      </div>
    </div>
  );
};

export default Post;
