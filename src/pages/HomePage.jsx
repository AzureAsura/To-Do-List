import React from 'react'
import Hero from '../components/Hero'
import Listings from '../components/Listings'
import ViewAll from '../components/ViewAll'



const HomePage = () => {
  const addList = async (newList) => {
    const res = await fetch ('/api/todos', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newList)
    })
    return
  }


  return (
    <>
    <Listings recentList={true} extraDesign={true} noMb={true}/>
    <ViewAll/>
    <Hero addListSubmit={addList }/>
    </>
  )
}

export default HomePage