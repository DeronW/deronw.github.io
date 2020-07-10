import React, { useState, useEffect } from "/web_modules/react.js";
import { Grid, Typography, TextField, Button } from "/web_modules/@material-ui/core.js";

function Form({
  startHandler,
  minutes
}) {
  let [text, setText] = useState(minutes);
  let [disabled, setDisabled] = useState(false);

  let clickHandler = () => {
    startHandler(text);
  };

  useEffect(clickHandler, []);

  let minChangeHandler = e => {
    let v = e.target.value;
    setText(v);
    setDisabled(!(v > 0));
  };

  let Space = () => /*#__PURE__*/React.createElement("div", {
    style: {
      width: "15px"
    }
  });

  return /*#__PURE__*/React.createElement(Grid, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Typography, null, "Countdown"), /*#__PURE__*/React.createElement(Space, null), /*#__PURE__*/React.createElement(TextField, {
    label: "minutes",
    variant: "outlined",
    type: "number",
    value: text,
    onChange: minChangeHandler
  }), /*#__PURE__*/React.createElement(Space, null), /*#__PURE__*/React.createElement(Button, {
    onClick: clickHandler,
    disabled: disabled
  }, "Start"));
}

export default Form;