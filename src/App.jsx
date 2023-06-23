import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopCard } from './components/TopCard'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopCard/>
      <Card/>
    </>
  )
}

export default App
