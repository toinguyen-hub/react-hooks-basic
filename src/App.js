import React, { useState } from 'react';
import './App.scss';
import TodoList from './Components/TodoList';



function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love easy frontend !' },
    { id: 2, title: 'We love easy frontend !' },
    { id: 3, title: 'They love easy frontend !' }
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return false;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
