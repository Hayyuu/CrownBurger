import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link,Outlet } from 'react-router-dom'
import logoyellow from '/src/assets/logo-yellow.png'
import NavBar from './Nav/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <NavBar />
      <section>
        <Outlet />
      </section>
      
      </main>
      <p className="read-the-docs">
        Copyright © 2024 Hayat.All Right Reserved.
      </p>
      </>
    
  )
}

export default App
