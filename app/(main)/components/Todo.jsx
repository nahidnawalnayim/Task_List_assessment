"use client"
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm ,updateTodo} from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState([]);
 

  const handlesubmit = (e)=>{
    e.preventDefault();
  }
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText.trim()))
      localStorage.setItem('newTodoText', newTodoText.trim());
     
      setNewTodoText('');
    }
  };

  
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setNewTodoText(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodoText));
  }, [newTodoText]);

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
      <div className="flex items-center mb-4">
        <form onSubmit={handlesubmit}>

        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
       
        <div className="flex items-center mb-4">
        
        </div>
      </div>
      
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
