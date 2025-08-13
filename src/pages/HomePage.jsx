import React from 'react'
import Hero from '../components/Hero'
import Listings from '../components/Listings'
import ViewAll from '../components/ViewAll'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Listings recentList={true}/>
    <ViewAll/>
    </>
  )
}

export default HomePage