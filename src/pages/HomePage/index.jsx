import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './HomePage.scss';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import PostList from './Components/PostList';
import Pagination from './Components/Pagination';
import PostFiltersForm from './Components/PostFiltersForm';
import Clock from './Components/Clock';
import BetterClock from './Components/BetterClock';
import MagicBox from './Components/MagicBox';



function HomePage() {

    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love easy frontend !' },
        { id: 2, title: 'We love easy frontend !' },
        { id: 3, title: 'They love easy frontend !' }
    ]);

    const [postList, setPostList] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    })

    useEffect(() => {
        async function fetchPostList() {

            try {
                const paramsString = queryString.stringify(filter);
                const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestURL);
                // console.log(response);
                const responseJson = await response.json();
                //log dạng object để có name
                //console.log({ responseJson });

                // lấy dữ liệu 
                const { data, pagination } = responseJson;
                console.log(data);
                console.log(pagination);
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Lỗi ', error.message);
            }

        }

        fetchPostList();
    }, [filter]);

    function handlePageChange(newPage) {
        console.log('New page ', newPage);
        setFilter({
            ...filter,
            _page: newPage,
        });
    }

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

    function handleFiltersChange(newFilters) {
        console.log('new Filters ', newFilters);
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilters.searchTerm
        });
    };

    const [showClock, setShowClock] = useState(true);

    return (
        <div className="app">
            {/* <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange} /> */}

            <h1>React Hooks - Clock</h1>
            {showClock && <Clock />}
            <BetterClock />
            <button style={{ display: 'block', marginTop: '30px' }} onClick={() => setShowClock(false)}>Hide Clock</button>
            <MagicBox />
        </div>
    );
}

export default HomePage;
