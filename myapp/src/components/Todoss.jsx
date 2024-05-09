// import React from 'react'
// import { useState } from 'react'

// function Todoss() {
//     const[inputValue , setInputValue] = useState('')
//     const[todos , setTodos] = useState([])
//     localStorage.setItem("todos",JSON.stringify(todos))  
//    function addTodo(){
//     const newTodo = {
//         id : new Date().getTime(),
//         text : inputValue
//     }
//     setTodos([...todos , newTodo])
//   setInputValue('')
//    }
//   return (
//     <div>
//       <h1>TODO APP</h1>
//       <input 
//         value={inputValue}
//         onChange={(e)=>setInputValue(e.target.value)}

//       />
//       <button onClick={addTodo}>Add Task</button>
//       <ul>
//         {
//             todos.map((todo)=>(
//                <>
//                <li>{todo.text}</li>
              
//                </>
//             ))
//         }
//     </ul>
//     </div>
//   )
// }

// export default Todoss


import React from 'react'
import { useState } from 'react'

function Todoss() {
  const[inputValue , setInputValue] = useState('')
  const[todos , setTodos] = useState([])
  localStorage.setItem('todo',JSON.stringify(todos))
  function addTask(){
const newTodos = {
id : new Date().getTime(),
text : inputValue

}
setTodos([...todos , newTodos])
setInputValue('')

  }

  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{textAlign:"center"}}>TODO APP</h1>
      <input
      
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>



  {
    todos.map((todo)=>(
      <>
        <h1 style={{color:"red"}}>{todo.text}</h1>
      </>
    ))
  }


    </div>
  )
}

export default Todoss
