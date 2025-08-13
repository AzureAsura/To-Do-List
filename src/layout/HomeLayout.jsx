import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarTest from '../components/NavbarTest'
 

const HomeLayout = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[black] to-[red]'>
        <NavbarTest/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout