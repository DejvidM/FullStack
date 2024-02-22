import { useState } from 'react'
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom'
import './App.css'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import Manage from './components/Manage'
import Game2 from './components/Game2' 
import Game3 from './components/Game3' 

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/players/list'} />}/>
          <Route path='/players/list' element={<PlayerList />} />
          <Route path='/players/addplayer' element={<AddPlayer />} />
          <Route path='status/game1' element={<Manage />} />
          <Route path='/players/game2' element={<Game2></Game2>} />
          <Route path='/players/game3' element={<Game3></Game3>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
