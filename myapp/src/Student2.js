import React,{useState} from "react";
import Higherorder from "./HOC";

function Student2(props){
return(
    <>
  Student1
        <h1>{props.num}</h1>
        <button onClick={()=>props.handleEvent()}>Click</button>
    </>
)
}
export default Higherorder(Student2)
// import React, { useState } from 'react'
// import Higherordercom from './HOC'

// const  Student1=(props)=> {
//   return (
//     <div>student1
//         <h3>{props.num}</h3>
//         <button onClick={()=>props.handleEvent()}>Count Inc</button>
//     </div>
//   )
// }
// export default Higherordercom(Student1)