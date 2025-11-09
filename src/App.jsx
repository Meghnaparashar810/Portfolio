import React from 'react'
import Portfolio from './pages/Portfolio'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div >

      <Outlet />
      < Portfolio />

    </div>
  )
}

export default App
