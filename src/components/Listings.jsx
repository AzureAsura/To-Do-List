import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';

const Listings = ({ recentList = false, extraDesign = false , noMb}) => {
    const [todo, setToDo] = useState([])
    const [loading, setLoading] = useState(true)

    const deleteList = async (id) => {
        try {
            const res = await fetch(`/api/todos/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setToDo(prevTodos => prevTodos.filter(item => item.id !== id))
            }
        } catch (error) {
            console.log('Error deleting todo:', error)
        }
    }

    useEffect(() => {
        const fetchTodo = async () => {
            const apiUrl = recentList ? '/api/todos?_limit=3' : '/api/todos'
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
    }, [recentList])

    const sortedTodos = todo.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB; 
    });

    const todoList = sortedTodos;


    return (
        <section className="px-4 pt-2 pb-7">
            <div className="container-xl lg:container m-auto">

                {extraDesign && (
                    <div className="mb-12 mt-7">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-100 mb-2">Your Upcoming Tasks</h2>
                            <p className="text-white">Stay organized with your most important tasks</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {todoList.map((todos) => (
                        <Card
                            key={todos.id}
                            todos={todos}
                            deleteList={deleteList}  
                            noMb={noMb}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Listings