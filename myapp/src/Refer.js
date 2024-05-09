// import React, {Fragment, useRef} from 'react'; 

// function Refer() { 

// // Creating a ref object using useRef hook 
// const focusPoint = useRef(null); 
// const onClickHandler = () => { 
// 	focusPoint.current.value = 
// 	"The quick brown fox jumps over the lazy dog"; 
// 	focusPoint.current.focus(); 
// }; 
// return ( 
// 	<Fragment> 
// 	<div> 
// 		<button onClick={onClickHandler}> 
// 		ACTION 
// 		</button> 
// 	</div> 
// 	<label> 
// 	Click on the action button to 
// 	focus and populate the text. 
// 	</label><br/> 
// 	<textarea ref={focusPoint} /> 
// 	</Fragment> 
// ); 
// }; 

// export default Refer;


// import React from 'react'
// import { useState , useEffect , useRef } from 'react'



// function Refer() {
//     const[data , setData] = useState("")
//     // const[count , setCount] = useState(0)

//     const count = useRef(0)
// useEffect(()=>{
//     // setCount(count + 1)
//     count.current = count.current + 1
// })


//   return (
//     <div>
//       <input value = {data} onChange={(e)=>setData(e.target.value)} />
//       <p>Changes : {count.current}</p>
//     </div>
//   )
// }

// export default Refer



// import React from 'react'
// import { useState , useEffect , useRef } from 'react'

// function Refer() {
//     const[data , setData] = useState("")
//     // const [count , setCount] = useState()
//     const count = useRef(0)

//     useEffect(()=>{
//         // setCount(count + 1)

//         count.current = count.current + 1
//     })
//   return (
//     <div>
//       <input value={data} onChange={(e)=>setData(e.target.value)}/>
//       <p>Current Changes :{count.current} </p>
//     </div>
//   )
// }

// export default Refer



import React from 'react'
import { useState , useRef , useEffect , Fragment } from 'react'

function Refer() {
  const[inputValue , setinputValue] = useState("")
  const[count , setCount] = useState(0)
  // const count = useRef(0)

  useEffect(()=>{
    setCount(count + 1)
    // count.current = count.current + 1
  },[])
  return (
    <Fragment>
      <input value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
      {
        console.log(inputValue)
      }
      <h1>Count Changes : {count}</h1>
    </Fragment>
  )
}

export default Refer

