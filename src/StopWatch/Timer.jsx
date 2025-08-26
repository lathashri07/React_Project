import './index.css'
import React, {useState, useEffect, useRef} from 'react';

function Timer() {

    const [isRunning, setisRunning] = useState(false);
    const [elapsedTime, setelapsedTime] = useState(0); // (useState)when the value affects what you see on the screen
    const intervalIdRef = useRef(null); //(useRef) when the value does not affect what you see on the screen
    const startTimeRef = useRef(0);

    useEffect ( () => {

    if(isRunning) {
        intervalIdRef.current = setInterval(() => {
            setelapsedTime(Date.now() - startTimeRef.current); // keep ticking
        }, 10);
    }
     
    return () => {
        clearInterval(intervalIdRef.current);
    }              
    } , [isRunning]) // It tells React: Only re-run this effect when isRunning changes. * Interval starts when isRunning = true. *Interval stops when isRunning = false.

    function start() {
        setisRunning(true);
        startTimeRef.current = Date.now() - elapsedTime; // To resume from where it was stopped
    }

    function stop() {
        setisRunning(false);
        clearInterval(intervalIdRef.current);
    }

    function reset() {
        setelapsedTime(0);
        setisRunning(false);
    }

    function formatTime() {
        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);  
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : "" + num;
    }

    return (
        <div className='container'>
            <div className='display'>{formatTime()}</div>

            <div className='controls'>
                <button className='start' onClick={start}>Start</button>
                <button className='stop' onClick={stop}>Stop</button>  
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Timer;