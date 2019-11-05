import React from 'react';
import Timer from "react-compound-timer";

const TimerDeadline = props => {
  let deadline = Date.parse(props.deadline) - Date.parse(new Date());
  const spanStyle = {
    color: "#777",
    fontWeight: '400',
  };

  return (
    <div className='task-deadline-timer'>
      <i className="far fa-clock" style={{marginRight: "3px"}}/>
      <Timer
        initialTime={deadline}
        direction="backward"
      >
        {({getTime}) => (
          <>
            {getTime() >= 86400000 ?
              <strong className="text-danger">
                <Timer.Days/>
                <span style={spanStyle}> days left</span>
              </strong> : null}
            {getTime() >= 3600000 && getTime() <= 86399999 ?
              <strong className="text-danger">
                <Timer.Hours/>
                <span style={spanStyle}> hours left</span>
              </strong> : null}
            {getTime() >= 60000 && getTime() <= 3599999 ?
              <strong className="text-danger">
                <Timer.Minutes/>
                <span style={spanStyle}> minutes left</span>
              </strong> : null}
            {getTime() <= 59000 ? <strong className="text-danger"> Time is ran out </strong> : null}
          </>
        )}
      </Timer>
    </div>
  );
};

export default TimerDeadline;