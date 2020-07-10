import React, { useState, useEffect } from "/web_modules/react.js";
import { Typography, Grid } from "/web_modules/@material-ui/core.js";
import { ToggleButtonGroup, ToggleButton } from "/web_modules/@material-ui/lab.js";

function Time({
  speed,
  setSpeed
}) {
  const sppedChangeHandler = (_, newSpeed) => {
    newSpeed && setSpeed(newSpeed);
  };

  return /*#__PURE__*/React.createElement(Grid, {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ToggleButtonGroup, {
    value: speed,
    exclusive: true,
    onChange: sppedChangeHandler
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "1"
  }, "1.0 \xD7"), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "1.5"
  }, "1.5 \xD7"), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "2"
  }, "2.0 \xD7"), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "1000"
  }, "Max")));
}

export default Time;