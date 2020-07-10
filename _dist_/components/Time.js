import React, { useState, useEffect } from "/web_modules/react.js";
import { Typography } from "/web_modules/@material-ui/core.js";

function paded(n) {
  let t = parseInt(n);
  return t >= 10 ? t : "0" + t;
}

function Time({
  seconds
}) {
  return /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary",
    style: {
      textAlign: "center",
      fontSize: '48px'
    }
  }, paded(seconds / 60), ":", paded(seconds % 60));
}

export default Time;