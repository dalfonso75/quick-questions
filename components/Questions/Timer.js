import { useEffect } from "react";

function Timer({ pause, finishedTime, seconds, setSeconds }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        finishedTime();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [pause, seconds]);

  return (
    <span className="w-fit -ml-0.5 text-white text-center font-semibold text-3xl">
      {seconds}
    </span>
  );
}

export default Timer;
