import React, { useEffect, useState } from 'react';
import './App.scss';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import PostList from './Components/PostList';



function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love easy frontend !' },
    { id: 2, title: 'We love easy frontend !' },
    { id: 3, title: 'They love easy frontend !' }
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {

      try {

        const requestURL = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestURL);
        // console.log(response);
        const responseJson = await response.json();
        //log dạng object để có name
        console.log({ responseJson });

        // lấy dữ liệu 
        const { data } = responseJson;
        console.log(data);
        setPostList(data);
      } catch (error) {
        console.log('Lỗi ', error.message);
      }

    }

    fetchPostList();
  }, [])

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return false;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("Value Form: ", formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      <PostList posts={postList} />
    </div>
  );
}

export default App;
