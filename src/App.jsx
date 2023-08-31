import React from 'react'
// import { AppContextProvider } from './Context/SignIn'
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
    // <AppContextProvider>
      <RouterProvider router={router} />
      
      
    // </AppContextProvider>
  )
}

export default App
