import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=""element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App