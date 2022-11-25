import { useEffect, useState } from "react";

export default function Timer(props) {
  //format timer later
  const [timeDisplay, setTimeDisplay] = useState(0);

  let timer;

  useEffect(() => {
    if (props.reset) {
      setTimeDisplay(0);
    }
  }, [props.reset]);

  useEffect(() => {
    if (props.gameState == "inGame") {
      timer = setTimeout(() => {
        setTimeDisplay(timeDisplay + 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else if (props.gameState == "postGame") {
      let time = timeDisplay;

      props.getWinTime(time);
    }
  });

  return <div className="timer">Time: {timeDisplay}</div>;
}
