
import { AppContextProvider } from './Context/SignIn'
import './App.css'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'

function App() {



  return (
    <AppContextProvider>
      <div>
        <Nav />
        <Footer/>
      </div>
    </AppContextProvider>
  )
}

export default App
