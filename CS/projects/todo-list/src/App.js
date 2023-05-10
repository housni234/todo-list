import './App.css';
import { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <h1 className='title'>To-Do App</h1>
      <TodoForm onSubmit={addTodo} />
      <div className='wrapper'>
        <h2 className='header'><u>To do list</u></h2>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
