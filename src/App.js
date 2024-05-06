import logo from './logo.svg';
import './App.css';
import ProductsExcercise from './ProductsExcercise';
import TodoListExcercise from './TodoListExcercise';
import { useState } from 'react';

function App() {

  const [currentSection,setCurrentSection]=useState('');

  const handleProdut=()=>{
    setCurrentSection("product")
  }

  const handleTodo=()=>{
    setCurrentSection("todo")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleProdut}>Product</button>
        <button onClick={handleTodo}>Todo</button>
        { currentSection==='product'? <ProductsExcercise/>:null}
        {currentSection==='todo'?<TodoListExcercise/>:null}
      </header>
    </div>
  );
}

export default App;
