import React from 'react'
import './props.css'
import flower from './flower.jpeg'; // 

const props = (p) => {
  ;
  return (
    <div className='container'>
        <h2 id='name'>{p.name}</h2>
        <img id='img' src={flower} alt="chandan" />
        <p id='desc'>My name is chandan kumar. I am a web developer. I love to code.</p>
    </div>
  )
}

export default props