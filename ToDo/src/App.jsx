import { useState } from 'react'

import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {

  const [search, setSearch] = useState("");

  const [todos, setTodos] = useState([
      
    ]);

    const addTodo = (text, category) => {
      const newTodos = [
        ...todos, 
        {
          id:Math.floor(Math.random() *10000),
          text,
          category,
          isCompleted:false,
      }]

      setTodos(newTodos);
    };

    const removeTodo = (id) =>{
      const newsTodos = [...todos];
      const filteredTodos = newsTodos.filter(todo => 
        todo.id !== id ? todo: null
        );
        setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
      const newTodos = [...todos];
      newTodos.map((todo) => 
        todo.id === id ? todo.isCompleted = !todo.isCompleted: todo
      );
      setTodos(newTodos);
    }

  return (
    <div className='app'>
      <h1>
        Lista de Tarefas  
      </h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
          {todos.filter((todo)=> 
            todo.text.toLowerCaso().includes(search.toLowerCase()))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
