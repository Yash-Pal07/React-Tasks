import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'

const App = () => {
  const [Src1, setSrc1] = useState(null);
  const [Src2, setSrc2] = useState(null);
  const Image1 = useRef(null);
  const Image2 = useRef(null);
    const Btnhandler = () => {
      if (Image1.current && Image2.current) {
        // this will only work if Image1.current and Image2.current has some value other then null
          setSrc1(Image1.current.getAttribute("src"));
          setSrc2(Image2.current.getAttribute("src"));
      }
  };
  
  useEffect(()=>{
    if (Src1 && Src2) {
      // Only update if Src1 and Src2 are not null
      Image1.current.setAttribute("src", Src2);
      Image2.current.setAttribute("src", Src1);
  }
  },[Src1,Src2]);
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center px-[20vw]'>
      <div className='flex justify-evenly items-center w-full '>
        <img ref={Image1} className='w-[15vw] h-[20vw] object-cover object-top bg-red-400 rounded-lg shadow-lg' src="https://plus.unsplash.com/premium_vector-1711987731643-e8232801047b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <button onClick={Btnhandler} className='px-[3vw] py-[1vw] bg-blue-500 rounded-lg shadow-lg text-white h-fit w-fit font-semibold active:scale-[98%]'>Swap<i className="ri-arrow-left-right-line ml-[.3vw] "></i></button>
        <img ref={Image2} className='w-[15vw] h-[20vw] object-cover object-top bg-red-400 shadow-lg rounded-lg' src="https://plus.unsplash.com/premium_vector-1711987763169-97d809af51a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default App
