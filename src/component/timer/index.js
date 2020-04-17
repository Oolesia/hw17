import React, { useState, useEffect} from 'react';
import './index.css'


function Timer(props) {
    const [currentTime, setTime] = useState(props.time);
    const [playTimer, setPlayTimer] = useState(props.autoStart);
    let timerID;
    const second = 1000;

        useEffect(() => {
            if(playTimer){
                if(currentTime>0){
                    timerID = setTimeout( () => {
                    setTime(currentTime - props.step/second);
                    }, props.step)
                }if(currentTime<=0){
                    setPlayTimer(false);
                }
            }
        });


    function changeBtn (){
        if (playTimer) {
            clearTimeout(timerID);
          }
          setPlayTimer(!playTimer)
    }

    return(
        <div>
            <div className='timer'>
            <p>{currentTime}</p>
            <div className='timer-line' style={{
                width : ((currentTime*100)/props.time) + '%'
               /* width : (((props.time-currentTime)/props.time)*100) + '%'*/
            }}></div>
            <button className='start-pause' onClick={changeBtn}>{playTimer ? 'Pause' : 'Start'}</button>
            <button className='reset' onClick={()=>{
                clearTimeout(timerID);
                setTime(props.time);
                setPlayTimer(props.autoStart)
                }}>Reset</button>
            </div>
        </div>
    );

}
export default Timer;