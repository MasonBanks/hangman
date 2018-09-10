import React from "react";
import "./PopUp.css";

function PopUp({ win }) {
  return (
    <div className={!win ? "hidden" : "not-hidden"}>
      <br />
      <h3> SUCCESS! </h3>
      <br />
    </div>
  );
}
export default PopUp;
