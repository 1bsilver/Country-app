import React, { useState } from "react";
import Detail from "./detail";

const EachCountry = ({ countries }) => {
  const [show, setShow] = useState(false);

  const buttonClick = (event) => {
    setShow(!show);
    // console.log(show);
  };

  if (show === true) {
    return (
      <div>
        <Detail all={countries} />
        <button  class="location-button"  onClick={buttonClick}> {show ? "hide" : "show"} </button>
      </div>
    );
  } else {
    return (
      <div>
        {countries.name}
        <button class="location-button"   onClick={buttonClick}>{show ? "hide" : "show"}</button>
      </div>
    );
  }
};

export default EachCountry;
