import React from "react";
import "./Avatar.css";

const Avatar = ({ img, alt, height, width }) => {
  return (
    <>
      <img className="avatar" src={img} alt={alt} style={{ height: `${height}px`, width: `${width}px` }} />
    </>
  );
};

export default Avatar;
