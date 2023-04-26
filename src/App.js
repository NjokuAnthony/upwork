import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Services from './pages/Services'
import Login from './pages/Login'
import Home from './pages/Home'
// import { Form } from 'react-router-dom'
import Form from '../src/pages/Form'


const App = () => {
  // const authenticated = true
  return (
    <>
    {/* {authenticated ?  <Home /> :  <Login />} */}
    <Form />
   
    
    </>
    // <Router>
    //   <Routes>

    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/services' element={<Services />} />
    //   </Routes>

    // </Router>
  )
}

export default App
