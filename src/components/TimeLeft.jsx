import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-gray-600 rounded">
      <p className="text-3xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="text-red-900 text-4xl font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <div className="grid grid-flow-col gap-2">
        <button
          className="text-yellow-400 bg-black px-4 py-2 rounded"
          id="start_stop"
          onClick={handleStartStopClick}
        >
          {startStopButtonLabel}
        </button>
        <button
          className="text-yellow-400 bg-black px-4 py-2 rounded"
          id="reset"
          onClick={handleResetButtonClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimeLeft;
