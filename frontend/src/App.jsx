import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import TextareaWithToolbar from './components/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <TextInput />
    </>
  )
}

export default App
