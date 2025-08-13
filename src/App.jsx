import { useState } from 'react'
import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLayout from './layout/HomeLayout'
import AllListings from './pages/AllListings'
import EditPage from './pages/EditPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<HomePage/>}/>  
      <Route path='/edit/:id' element={<EditPage/>}/>  
      <Route path='/all-listings' element={<AllListings/>}/>  
    </Route>

    
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
