import React, { useState, useEffect } from "/web_modules/react.js";
import { Grid, Card, CardContent } from "/web_modules/@material-ui/core.js";
import Count from "./components/Count.js";
import Tips from "./components/Tips.js";
import Time from "./components/Time.js";
import Pause from "./components/Pause.js";
import Speed from "./components/Speed.js";

function App() {
  let [seconds, setSeconds] = useState(-1);
  let [speed, setSpeed] = useState("1");
  let [pause, setPause] = useState(false);
  let [minutes, setMinutes] = useState(1);
  useEffect(() => {
    // console.log(!pause, seconds > 0, seconds - 1);
    let timer = setTimeout(() => {
      // console.log(222,timer, speed)
      if (!pause) {
        if (seconds > 0) setSeconds(seconds - 1);
      }
    }, 1000 / parseFloat(speed));
    return () => {
      clearInterval(timer);
    };
  });

  let startHandler = m => {
    setMinutes(m);
    setSeconds(m * 60);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Count, {
    startHandler: startHandler,
    minutes: minutes
  })), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Tips, {
    minutes: minutes,
    seconds: seconds
  })), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Grid, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Time, {
    seconds: seconds
  }), /*#__PURE__*/React.createElement(Pause, {
    pause: pause,
    setPause: setPause
  }))), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Speed, {
    speed: speed,
    setSpeed: setSpeed
  }))));
}

export default App;