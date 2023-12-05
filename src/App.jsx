import { useState } from 'react'
import './App.css'
import Header from './header'
import Footer from './footer'
import Home from './home'
import About from './about'
import Delivery from './delivery'
import Contacts from './contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Delivery/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
