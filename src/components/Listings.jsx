import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';

const Listings = ({ recentList = false }) => {
    const [todo, setToDo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const fetchTodo = async () => {
            const apiUrl = recentList ? '/api/todos?_limit=2' : '/api/todos'
            try { 
                const res = await fetch(apiUrl);
                const data = await res.json();
                setToDo(data)
                
            } catch (error) {
                console.log('Eror fetching data',error)
            } finally {
                setLoading(false)
            }
        }
        fetchTodo(); 
    }, [])

    const Listings = recentList ? todo.slice(0, 2) : todo;
    return (
        <section className=" px-4 pt-2 pb-20">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 " >
                    {recentList}
                    {todo.map((todos) => (
                        <Card key={todos.id} todos={todos} />
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Listings