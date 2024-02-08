import React from 'react'
import './App.css'
import AxiosAPI from './components/AxiosAPI'
import FetchAPI from './components/FetchAPI'

function App() {
  return (
    <div>
      <AxiosAPI name="Test Axios" />
      <FetchAPI name="Test Fetch" />
    </div>
  )
}

export default App