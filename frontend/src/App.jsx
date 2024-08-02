import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path='/write_text' element={<TextInput />} />
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
