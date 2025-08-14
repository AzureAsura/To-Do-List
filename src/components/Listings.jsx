import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';

const Listings = ({ recentList = false }) => {
    const [todo, setToDo] = useState([])
    const [loading, setLoading] = useState(true)

    // Declare the deleteList function BEFORE using it
    const deleteList = async (id) => {
        try {
            const res = await fetch(`/api/todos/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                // Update the local state to remove the deleted item
                setToDo(prevTodos => prevTodos.filter(item => item.id !== id))
            }
        } catch (error) {
            console.log('Error deleting todo:', error)
        }
    }

    useEffect(() => {
        const fetchTodo = async () => {
            const apiUrl = recentList ? '/api/todos?_limit=2' : '/api/todos'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setToDo(data)

            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchTodo();
    }, [])

    const sortedTodos = todo.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Newest first (descending order)
    });

    const todoList = recentList ? sortedTodos.slice(0, 2) : sortedTodos;

    return (
        <section className="px-4 pt-2 pb-20">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {todoList.map((todos) => (
                        <Card
                            key={todos.id}
                            todos={todos}
                            deleteList={deleteList}  // Now this works because deleteList is declared above
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Listings