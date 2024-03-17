import { useState } from 'react'
import Header from './Components/Header'
import Outlet from "react-router-dom"
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
