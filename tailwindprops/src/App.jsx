import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import BgChanger from './components/BgChanger'
import PasswordGen from './components/PasswordGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <h1 className='bg-green-400 text-black rounded-xl  p-4 mb-4'>Tailwind Test </h1> */}
{/* <Card username="shaquib" btnText="Click Me"/>
<Card username="React" btnText="Click"/> */}
{/* <BgChanger/> */}
<PasswordGen/>
    </>
  )
}

export default App
