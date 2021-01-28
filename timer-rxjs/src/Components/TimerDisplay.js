import React from "react";

import './TimerDisplay.css'

function TimerDisplay(props) {

    return (
        <>
            <div className='timer-display-container'>
            <span className='timer-display-item'>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>
            <span>:</span>
            <span className='timer-display-item'>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>
            <span>:</span>
            <span className='timer-display-item'>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>
            </div>
        </>
    )
}

export default TimerDisplay;