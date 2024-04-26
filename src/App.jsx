import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import Reset from './pages/Reset'
import Auth from './Api/Auth';


const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Auth/>}>
      <Route path="/"element ={<SignIn />} />
<Route path="/signup"element ={<SignUp />}/>
<Route path="/reset"element ={<Reset/>}/>
<Route path="/forgetpassword"element ={<ForgetPassword/>}/>
    
    </Route>
    
    <Route path="/"element ={<Main />} >
<Route path ="/home"element ={<Home />}/>
<Route path="/about"element ={<About />}/>
<Route path="/contact"element ={<Contact/>}/>
</Route>

  </Routes>
</BrowserRouter>
  )
}

export default App