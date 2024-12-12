import { useEffect, useState } from "react";

const Stopwatch=()=>{
    const [isRunning,setisRunning]=useState(false);
    const [time,setTime]=useState(0);
    const[valid ,setValid]=useState(null);


    function handleStarting(){
        setisRunning((pre)=>!pre);
        clearInterval(valid);
    }
    function handleReset(){
        setTime(0);
        setisRunning(false);

    }
    useEffect(()=>{
        if (isRunning){
            const id =
            setInterval(()=>{
                setTime((time)=>time+1);
            },1000)
            setValid(id);
        }
        return ()=>clearInterval(valid);
    },[isRunning])

    function timeFormat(time){
        const hours =Math.floor(time/3600);
        const hr=(hours<10)?('0'+hours):hours
        const min=Math.floor((time/3600)/360);
        const m=(min<10)?('0'+min):min;
        const sec =time%60;
        const s=(sec<10)?('0'+sec):sec;
        return  `${hours < 10 ? '0' + hours : hours}: +
        ${min< 10 ? '0' + min : min}: +
        ${sec < 10 ? '0' + sec: sec}`
    }
    return (
        <div>
<h1>StopWatch</h1>
<h3>Timer:{timeFormat(time)} </h3>
<button onClick={handleStarting}>{isRunning? 'stop':'start'}</button>
<button onClick={handleReset}>Reset</button>
        </div>

    )
}
export default Stopwatch;