import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return; // prevent empty todos
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder='Enter a todo' 
          className='task-input' 
          value={input} 
          onChange={onInputChange} 
        />
        <button className='button-add'>+</button>
      </form>
    </div>
  )
}

export default Form;
