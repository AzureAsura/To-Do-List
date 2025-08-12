import { useState } from 'react'
import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLayout from './layout/HomeLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<HomePage/>}/>  
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
