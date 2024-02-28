import React from "react";

function Values(props) {
  return (
    <div>
      <h3 className={props.className}>{props.value}</h3>
    </div>
  );
}

export default Values;
