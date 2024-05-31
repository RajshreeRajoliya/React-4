import React, { useState, useEffect } from 'react';

function Todoha() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTask() {
    if (editId !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputValue } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInputValue(todoToEdit.text);
    setEditId(id);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>TODO APP</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => editTodo(todo.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Todoha;
