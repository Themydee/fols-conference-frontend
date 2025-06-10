import React from 'react'
import { ToastContainer } from 'react-toastify'
import Conference from './components/Conference'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <ToastContainer />
      <Conference />
    </div>
  )
}

export default App