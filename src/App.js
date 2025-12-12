import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/Todolist';

function App() {
  const [input, setInput] = useState("");

  // Initialize todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />

        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        /> 

        <TodoList 
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
