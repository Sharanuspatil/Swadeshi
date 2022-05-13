import { React, useState, useEffect, useRef } from "react";
import classes from "./Timer.module.css";
let flag = true;
export let timersec = 0;

const Timer = (props) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(`${props.due}`).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      timersec = seconds;

      if (distance <= 0) {
        clearInterval(interval.current);
        return false;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    flag = startTimer();
    return;
  });

  if (flag) {
    return <h4 className={classes.timer}>Time UP!</h4>;
  }

  return (
    <div className={classes.timer}>
      <h4>
        {timerDays}
        <small>D</small>:{timerHours}
        <small>h</small>:{timerMinutes}
        <small>m</small>:{timerSeconds}s
      </h4>
    </div>
  );
};

export default Timer;
