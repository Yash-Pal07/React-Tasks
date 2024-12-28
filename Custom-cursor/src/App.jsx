import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const Cursor = useRef(null);
  useEffect(()=>{

    const handlemove = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }
    window.addEventListener("mousemove",handlemove)
    Cursor.current.style.top = Y + "px";
    Cursor.current.style.left = X + "px";
  },[X,Y])
  return (
    <div className='w-[100vw] h-[100vh] relative overflow-hidden cursor-none'>
      <div ref={Cursor} className='cursor w-[1vw] h-[1vw] overflow-hidden bg-white rounded-full absolute'></div>
    </div>
  )
}

export default App
