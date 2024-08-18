// Foreground.jsx
import React, { useRef, useState, useEffect } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const [todos, setTodos] = useState(() => {
        
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [input, setInput] = useState('');

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newTodos = [...todos, {
                id: Date.now(),
                desc: input,
                tagColor: Math.random() > 0.5 ? "blue" : "green"
            }];
            setTodos(newTodos);
            setInput('');
        }
    }

    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div className="bg-zinc-800">
            <form onSubmit={addTodo} className="fixed top-0 left-0 w-full p-5 flex justify-center items-center z-[4]">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a new todo"
                    className="p-2 rounded-l-lg bg-zinc-700 text-white placeholder-zinc-400"
                />
                <button 
                    type="submit"
                    className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                    Add Todo
                </button>
            </form>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 pt-20">
                {todos.map((item) => (
                    <Card key={item.id} data={item} reference={ref} onComplete={removeTodo} />
                ))}
            </div>
        </div>
    )
}

export default Foreground