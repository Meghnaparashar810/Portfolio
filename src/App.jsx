import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './pages/Navbar.jsx'
import Portfolio from './pages/Portfolio.jsx'

function App() {
  return (
    <>
      <Routes>
        {/* <Route
          path=''
          element={<Navbar />} /> */}
          
        <Route
          path=''
          element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
