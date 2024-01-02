import { useState } from 'react'
import Sidenav from './components/Sidenav';
import Mains from './components/Mains.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidenav/>
    <Mains/>
    
       
    </>
  )
}

export default App
