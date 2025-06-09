import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Conference from './pages/Conference'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Conference />} />
      </Routes>
    </div>
  )
}

export default App