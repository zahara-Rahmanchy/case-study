import React from "react";

const Title = ({title}) => {
  return (
    <div className="title">
      <img src="./Star.png" alt="star" style={{marginRight: "3px"}} />
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
