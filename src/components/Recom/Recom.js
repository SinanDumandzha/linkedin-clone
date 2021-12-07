import React from "react";
import "./Recom.css";
import Avatar from "../Avatar/Avatar";

const Recom = ({ img, alt, height, width, title, desc, href }) => {
  return (
    <div className="recom">
      <a href={href}>
        <Avatar img={img} alt={alt} height={height} width={width} desc={desc} />
      </a>
      <div className="recom__info">
        <a href={href}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </a>
        <button className="recom__follow">
          <span className="recomPlus">+</span> Follow
        </button>
      </div>
    </div>
  );
};

export default Recom;
