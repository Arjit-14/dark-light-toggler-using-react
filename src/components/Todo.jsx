import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = ({color}) => 
{
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleinput = (e) => {
        e.preventDefault();
        const val = e.target[0].value;
        const todoobj = { todoname: val, time: Date.now(), done: false };
        setTodos(prevTodos => [...prevTodos, todoobj]);
        e.target.reset();
    }

    const handledone = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
    }

    const handledelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        toast("Todo deleted");
    }

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className={`bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg bg-${color} ${(color==='white') ? 'text-black' : 'text-white'}`}>
                <div class="mb-4">
                    <h1 class="text-grey-darkest">Todo List</h1>
                    <form onSubmit={handleinput} class="flex mt-4">
                        <input 
                        required 
                        className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker bg-${color}`}
                        placeholder="Add Todo" />
                        <button type='submit' class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal">Add</button>
                    </form>
                </div>
                <div>
                    {todos.map((todo, index) => (
                        <div key={index} className="flex mb-4 items-center">
                            <p className={`${todo.done && 'line-through'} w-full text-grey-darkest   `}>{todo.todoname}</p>
                            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-black text-green border-green hover:bg-green" onClick={() => handledone(index)}>Done</button>
                            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-black hover:bg-red" onClick={() => handledelete(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Todo;
