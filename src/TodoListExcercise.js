import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function TodoListExcercise() {
  const [todos,setTodos]=useState([{name:"go to gym"},{name:"go to work"}]);
 
  return (
    <>
    <h1>TODO Excercise</h1>
    {todos.map(todo => <li>{todo.name}</li>)}
      
    </>
  );
}

export default TodoListExcercise;
