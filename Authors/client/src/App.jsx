import { useState } from 'react'
import {BrowserRouter , Routes , Route ,Navigate} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
function App() {
  
  return (
    <>
      <h1>Favorite Authors </h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/authors' />}></Route>
          <Route path='/authors' element={<Home></Home>} ></Route>
          <Route path='/authors/new' element={<Add></Add>}></Route>
          <Route path='/authors/:_id/edit' element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
