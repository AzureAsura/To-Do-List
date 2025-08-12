import React from 'react'
import todo from '../ToDo.json'
import Card from './Card'

const Listings = () => {
    return (
        <section className=" px-4 pt-2 pb-50">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 " >
                    {todo.map((todos) => (
                        <Card key={todos.id} todos={todos}/>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Listings