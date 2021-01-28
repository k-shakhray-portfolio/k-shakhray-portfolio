import React from "react";

import './Buttons.css'


function Buttons() {

    return (
        <>
            <div className='timer-button-container'>
            <button className='timer-button' id='startBtn'>start</button>
            <button className='timer-button' id='stopBtn'>stop</button>
            <button className='timer-button' id='waitBtn'>wait</button>
            <button className='timer-button' id='resetBtn'>reset</button>
            </div>
        </>
    )
}

export default Buttons;