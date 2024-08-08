import { useEffect, useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { Routes, Route, useNavigate, } from "react-router-dom"
import Welcome from './components/Welcome'
import History from './components/ShowHistory'

function App() {

  const name = localStorage.getItem("name")
  const navigate = useNavigate()
  useEffect(() => {
    if (name) {
      navigate("/write_text")
    }
  }, [])
  return (
    <>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/write_text' element={name ? <TextInput /> : "fill your name"} />
        <Route path='/history' element={<History />} />
      </Routes>

    </>
  )
}

export default App
