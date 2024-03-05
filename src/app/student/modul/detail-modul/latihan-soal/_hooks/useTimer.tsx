import { useEffect, useState } from "react";

interface UseTimerProps {
  time: number;
  onTimerEnd: () => void;
}

const useTimer = ({ time, onTimerEnd }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    // Load timeLeft from localStorage if available
    const savedTimeLeft = localStorage.getItem("timeLeft");
    if (savedTimeLeft) {
      setTimeLeft(parseInt(savedTimeLeft));
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          onTimerEnd();
          return 0;
        }
        const newTimeLeft = prevTimeLeft - 1000;
        localStorage.setItem("timeLeft", newTimeLeft.toString());
        return newTimeLeft;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time, onTimerEnd]);

  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    setFormattedTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  }, [timeLeft]);

  useEffect(() => {
    // Clear localStorage and reset timer on component unmount
    return () => {
      localStorage.removeItem("timeLeft");
    };
  }, []);

  return { formattedTime };
};

export default useTimer;
