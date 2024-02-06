import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import View from './components/View'
import Edit from './components/Edit'
function App() {
  
  return (  
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} default /> 
        <Route path='/api/details/:title' element={<View></View>} />
        <Route path='/edit/:title' element={<Edit></Edit>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
