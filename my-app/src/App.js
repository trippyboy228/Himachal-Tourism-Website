import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './header/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Himanyas from './pagess/Himanyas'
import Faura from './pagess/Faura'
import Fairs from './pagess/Fairs'
import Curisine from './pagess/Curisine'
import Adventure from './pagess/Adventure'
import Cultures from './pagess/Cultures'


const App=()=>{
  return(<>
  
   <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/himalayas" element={<Himanyas />} />
    <Route path="/faura" element={<Faura />} />
    <Route path="/Fairs" element={<Fairs />} />
    <Route path="/curisine" element={<Curisine />} />
    <Route path="/adventures" element={<Adventure />} />
    <Route path="/culture" element={<Cultures />} />
  
  </Routes>
  </>)
}
export default App