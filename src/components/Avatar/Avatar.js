import React from "react";
import "./Avatar.css";

const Avatar = ({ img, alt, height }) => {
  return (
    <>
      <img className="avatar" src={img} alt={alt} style={{ height: `${height}px` }} />
    </>
  );
};

export default Avatar;
