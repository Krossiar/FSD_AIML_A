import React, { useState } from "react";
import { useRef } from "react";
const Refex=()=>{
    const count=useRef(0);
    const [count1,setCount1]=useState(0);
    console.log("Object Rendered")
    function increment(){
        count.current++;
        setCount1(count1+1)
    }
    return(
        <div>
            <h1>Ref Counter:{count.current}</h1>
            <h1>UseState Counter:{count1}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Refex