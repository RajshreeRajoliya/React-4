import React from 'react'
import { useState,useEffect } from 'react'


function Todo() {
    const[inputValue , setInputValue]= useState('')
   const[todos , setTodos] = useState([])
   const [editId, setEditId] = useState(null); 

    useEffect(()=>{
       
      
       sessionStorage.setItem("sessiontodos",JSON.stringify(todos))
if(todos.length > 0){
  localStorage.setItem("todos",JSON.stringify(todos))  
}
     
        },[todos])

    function addTodo(){
if(inputValue !== ""){
  if (editId !== null) { // If there's an edit ID, update the existing todo
    setTodos(todos.map(todo => {
        if (todo.id === editId) {
            return { ...todo, text: inputValue };
        }
        return todo;
    }));
    setEditId(null);
  }else {
    const newTodo = {
      id : new Date().getTime(),
      text : inputValue
  }
  setTodos([...todos , newTodo])
setInputValue('')
  }

}

    }

function deleteTodo(id){
 setTodos(
    todos.filter((todo)=>(
        todo.id !== id
     ))   
 )
}
function editTodo(id){
  const todoToEdit = todos.find(todo => todo.id === id);
  setInputValue(todoToEdit.text);
  setEditId(id);
}
  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type='text'
        placeholder='Enter Task'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
    <ul>
        {
            todos.map((todo)=>(
               <>
               <li>{todo.text}</li>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                <button onClick={()=>editTodo(todo.id)}>Edit</button>
               </>
            ))
        }
    </ul>
    </div>
  )
}

export default Todo
