import React, { useRef, useState } from 'react'

const App = () => {
  const [Images, setImages] = useState(["https://imgs.search.brave.com/jpuZ2UR0AdQeHHo5jBBKPGD-Dl0fBwd8u1guYXpbANw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NC9DaGVubmFpLVN1/cGVyLUtpbmdzLUxv/Z28tUE5HLnBuZw","https://imgs.search.brave.com/xvxQ1FJTIwqmtg8IjdOif7zSsDkHvPZENciA85xeB7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NC9Lb2xrYXRhLUtu/aWdodC1SaWRlcnMt/TG9nby1QTkcucG5n","https://imgs.search.brave.com/O9HVE4-aGwNivq4G-2yRYgChXfdvYoPw_xB-44S4u90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NC9SYWphc3RoYW4t/Um95YWxzLUxvZ28t/UE5HLnBuZw","https://imgs.search.brave.com/epHoCp9W2x2QAKfGjzKmHmS6bgxCY5HT9Q3fZObX_QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmlj/ZmFjdHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L0d1anJhdC1UaXRh/bnMtSVBMLVRlYW0t/TG9nby5qcGc","https://imgs.search.brave.com/nja090_-MBdHPqFpuhYThlr289pq2S_XsmZm316rQ1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMDkw/NjAucG5n"])
  const Button = useRef(null);
  const [Team, setTeam] = useState(null);
  const Btnhandler = ()=>{
    if(Button.current){
      setTeam(Images[Math.floor(Math.random()*Images.length)]);
    }
    console.log(Team);
    
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='w-[30vw] h-[40vw] p-[2vw] flex flex-col items-center justify-between'>
        <div className='w-full h-[80%] border-[1px] bg-white border-solid border-gray-400 rounded-lg'>
          <img className='w-full h-full object-contain object-center rounded-lg' src={Team} alt="" />
        </div>
        <button ref={Button} onClick={Btnhandler} className='px-[2vw] active:scale-[98%] py-[1vw] bg-blue-500 rounded-lg text-white font-[gilroy] shadow-lg'>See Winner</button>
        
      </div>
    </div>
  )
}

export default App
App