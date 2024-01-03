import { useState } from 'react'
import Sidenav from './components/Sidenav';
import Mains from './components/Mains.jsx';
import Work from './components/Work.jsx'
import Favorites from './components/Favorites.jsx'
import Contact from './components/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidenav/>
    <Mains/>
    <Work/>
    <Favorites />
    <Contact />
    
       
    </>
  )
}

export default App
