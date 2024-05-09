import React from 'react'
import { useState } from 'react'


function Todoha() {
    const[inputValue , setInputValue] = useState('')
    const[todos , setTodos] = useState([])
   const[editId , setEditID] = useState(null)
localStorage.setItem("todos",JSON.stringify(todos))

function addTask(){

if(editId !== null){
setTodos(todos.map(todo=>{
  if(todo.id === editId){
    return {...todo , text : inputValue}
  }
  return todo
}))
setEditID(null);
}else {
  let newTodos = {
    // id : new Date().getTime(),
    id : new Date().getTime(),
    text : inputValue

}


setTodos([...todos,newTodos])
setInputValue('')

}
 

 
  
}

function deleteTodo(id){
  setTodos(todos.filter((todo)=>(
    todo.id != id
  )))
}
function editTodo(id){
const todoToedit = todos.find(todo=>todo.id === id)
setInputValue(todoToedit.text)
setEditID(id)
}

  return (
    <div style={{textAlign : "center"}}>
      <h1>TODO APP</h1>
     
      <input
        type='text'
        placeholder = "Enter Task"
        value = {inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
     
      <button onClick={addTask}>Add Task</button>
      
{
    todos.map((todo)=>(

<>
<h1 key={todo.id}>{todo.text}</h1>
<button onClick={()=>editTodo(todo.id)}>Edit</button>
<button onClick={()=>deleteTodo(todo.id)}>Delete</button>

</>
    ))
}

    </div>
  )
}

export default Todoha
