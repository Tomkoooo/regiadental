import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Dynamic from './pages/dynamic/dynamic'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:string" element={<Dynamic />} />
      </Routes>
    </Router>
  )
}

export default App