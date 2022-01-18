import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //State
  const [inputText,setInputText]=useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])
  // Use Effect

  return (
    <div className="todo-app">
      <header>
        <h1>Nghi's Todo List</h1>
      </header>
      <Form
        inputText = {inputText}
        setInputText = {setInputText}

        todos = {todos}
        setTodos = {setTodos}

        setStatus = {setStatus}
      />
      <TodoList
        todos={todos}
        setTodos = {setTodos}
        filteredTodos={filteredTodos}
      />
  
    </div>
 
  );
}

export default App;
