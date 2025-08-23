import './App.css'
import React, { useState } from 'react'


function App() {

const [count, setCount] = useState(0);
  return (
    <>
      <div className='counter-card'>
        <h2 id='title'>Counter Card</h2>
        <h3 id='count'>{count}</h3>
        <button id='btn' onClick= {()=> {setCount (count +1)}}>clicked me</button>
      </div>
    </>
  )
}

export default App
