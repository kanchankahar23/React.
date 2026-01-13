import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calculator from './Calculator'
import Addition from './Addition'
import Sub from './Sub'
import Multiplication from './Multiplication'
import Division from './Division'


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path='/add' element={<Addition />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/multiply' element={<Multiplication />} />
        <Route path='/divide' element={<Division />} />
      </Routes>
    </>
  )
}

export default App