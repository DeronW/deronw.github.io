import React, { useState, useEffect } from "/web_modules/react.js";
import { Button } from "/web_modules/@material-ui/core.js";
import PlayCircleOutlineIcon from "/web_modules/@material-ui/icons/PlayCircleOutline.js";
import PauseCircleOutlineIcon from "/web_modules/@material-ui/icons/PauseCircleOutline.js";

function Pause({
  pause,
  setPause
}) {
  let PlayBtn = /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPause(false)
  }, /*#__PURE__*/React.createElement(PlayCircleOutlineIcon, null));
  let PauseBtn = /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPause(true)
  }, /*#__PURE__*/React.createElement(PauseCircleOutlineIcon, null));
  return pause ? PlayBtn : PauseBtn;
}

export default Pause;