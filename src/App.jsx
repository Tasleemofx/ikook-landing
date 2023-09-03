import React from 'react'
import { DataContextProvider } from './Context/DataContext'
import './App.css'
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SignUp from './components/SignUp/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/signup",
      element: <SignUp />
    }
  ])
 
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
      
      
    </DataContextProvider>
  )
}

export default App
