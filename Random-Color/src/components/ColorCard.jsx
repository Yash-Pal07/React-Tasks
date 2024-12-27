import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { useState } from 'react'

const ColorCard = () => {
    const [Color, setColor] = useState(null);
    const [R, setR] = useState(null);
    const [G, setG] = useState(null);
    const [B, setB] = useState(null);
    const Gendiv = useRef(null);
    
    const Btnhandler = () => {
        setR(Math.floor(Math.random()*256));
        setG(Math.floor(Math.random()*256));
        setB(Math.floor(Math.random()*256));
    }
    // console.log(R,G,B);
    
    useEffect(()=>{
        setColor(`rgb(${R},${G},${B})`);
        Gendiv.current.style.backgroundColor = Color;
        Gendiv.current.style.boxShadow = `0px 4px 10px ${Color}`;


    },[R,G,B])
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col gap-[2vw] justify-center items-center'>
      <div ref={Gendiv} className="card w-[20vw] h-[20vw] bg-white shadow-lg rounded-lg">
      </div>
        <button onClick={Btnhandler}  className='px-[2vw] py-[1vw] bg-blue-400 rounded-lg text-white font-[gilroy] font-semibold active:scale-[98%] shadow-lg'>Generate</button>
    </div>
  )
}

export default ColorCard
