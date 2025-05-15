import './App.css'
import { useState } from 'react'

function App() {
  const [student, setStudent] = useState("")
  const items: string[] = ["koffi", "renan", "gabriel", student]

  function addStudent(name: string): any {
    setStudent(name)
  }
  return (
    <>
      <button onClick={() => addStudent('john doe')}></button>
      <ul>
       {items.map(name => <li key={name}>{name}</li>)}
      </ul>
    </>
  )
}

export default App
