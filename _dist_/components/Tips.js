import React, { useState, useEffect } from "/web_modules/react.js";
import { Typography } from "/web_modules/@material-ui/core.js";

function Tips({
  seconds,
  minutes
}) {
  let tips = " ";
  if (seconds < minutes * 30) tips = "More than half way there";
  if (seconds < 10 && seconds % 2) tips = " ";
  if (seconds == 0) tips = "Time's up!";
  let color = seconds < 20 ? "secondary" : "primary";
  return /*#__PURE__*/React.createElement(Typography, {
    color: color,
    style: {
      height: "20px",
      textAlign: "center"
    }
  }, tips);
}

export default Tips;