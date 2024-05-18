"use client";
import React, { useEffect, useState } from "react";
import { formatTimeForDisplay } from "@/utils/index.js";

const Timer = () => {
  const [activeTime, setActiveTime] = useState(25 * 60);

  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setActiveTime(25 * 60);
    setTimerRunning(false);
  };

  useEffect(() => {
    if (!timerRunning) return;

    const timer = setInterval(() => {
      setActiveTime((t) => t - 10);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning]);

  return (
    <div className="w-full flex grow bg-teal-900 justify-center items-center">
      <div>{formatTimeForDisplay(activeTime)}</div>
      <button
        onClick={startTimer}
        className="bg-slate-400 rounded-2xl shadow-md shadow-black p-1 px-2"
      >
        Start
      </button>

      <button
        onClick={pauseTimer}
        className="bg-slate-400 rounded-2xl shadow-md shadow-black p-1 px-2"
      >
        Pause
      </button>

      <button
        onClick={resetTimer}
        className="bg-slate-400 rounded-2xl shadow-md shadow-black p-1 px-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
