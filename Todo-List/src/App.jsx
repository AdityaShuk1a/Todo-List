import React from 'react'
import Home from './Home'
import { Routes , Route } from 'react-router-dom'
import { Button } from '@mui/material'
import CustomCursor from './components/CustomCursor'
const App = () => {

  return (

    <>
     
    <Routes>
      <Route path='/' element={<Home />}  />
    </Routes>
    </>
  )
}

export default App
