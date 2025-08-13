import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPage = () => {
    const [todo, setTodo] = useState(null) // Perbaiki typo
    const [loading, setLoading] = useState(true) // Tambah state loading
    const { id } = useParams();

    useEffect(() => {
        const fetchTodo = async () => {
            try { 
                const res = await fetch(`/api/todo/${id}`); // Perbaiki URL
                const data = await res.json();
                setTodo(data)
                
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchTodo() 
    }, [id]) // Tambah dependency id

    // Loading state
    if (loading) {
        return <div>Loading...</div>
    }

    // Jika todo tidak ditemukan
    if (!todo) {
        return <div>Todo not found</div>
    }

    return (
        <div>{todo.date}</div>
    )
}

export default EditPage