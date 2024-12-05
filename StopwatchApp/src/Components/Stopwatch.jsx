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
        const min=Math.floor((time/3600)/360);
        const sec =time%60;
        return `${hours}<10?0${hours}:${hours}:${min}:${sec}`
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