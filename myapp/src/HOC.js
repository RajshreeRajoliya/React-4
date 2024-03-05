import React from "react";
import { useState } from "react";

function HOC(Student){

function HOCinner(){
    const[num , setNum] = useState(0)
  function handleEvent(){
        setNum(num + 10)
    }
    return(
        <>
    <Student num={num} handleEvent={handleEvent}/>
        </>
    )
}
return HOCinner
}

export default HOC