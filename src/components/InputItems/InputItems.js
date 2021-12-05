import React from "react";
import "./InputItems.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputItems = ({ icon, color, title, size }) => {
  return (
    <div className="inputOption">
      <FontAwesomeIcon icon={icon} color={color} size={size} />
      <h5>{title}</h5>
    </div>
  );
};

export default InputItems;
