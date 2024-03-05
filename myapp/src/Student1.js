import React from "react";
import HOC from "./HOC";

function Student1(props){
return(
   <>
<h1>{props.num}</h1>
<button onClick={()=>props.handleEvent()}>Incruu</button>
   </>
)
}

export default HOC(Student1)