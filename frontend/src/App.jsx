import { useEffect, useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { Routes, Route, useNavigate, } from "react-router-dom"
import Welcome from './components/Welcome'
import History from './components/ShowHistory'

function App() {

  const token = localStorage.getItem("token")


  return (
    <>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/write_text' element={token ? <TextInput /> : "some Error"} />
        <Route path='/history' element={<History />} />
      </Routes>

    </>
  )
}

export default App
