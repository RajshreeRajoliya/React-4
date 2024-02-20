import React from "react";
import { useState,useEffect } from "react";

function Productpage(){
    const[data,setData] = useState("")

   useEffect(()=>{
    async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const jsonData = await response.json()
console.log(jsonData)
setData(jsonData)
    }

    fetchData()
   },[])
return(
    <>
<ul>
    {
        data && data.map((el)=>{
        return    <li key={el.id}>{el.title}</li>
        })
    }
</ul>
    </>
)
}
export default Productpage
