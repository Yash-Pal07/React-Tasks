import React, { useEffect, useRef, useState } from "react";

const RquestCard = () => {
  const [Btn, setBtn] = useState(false);
  const RequestButton = useRef(null);
  const [check, setcheck] = useState(0)
  const Btnhadler = () => {
      setBtn(!Btn);
      setcheck(1);
    };
    useEffect(() => {
       if(check===1){
        if (Btn === true) {
            RequestButton.current.innerHTML = "Requesting...";
            setTimeout(() => {
              RequestButton.current.innerHTML = "Friends";
            }, 2000);
          } else {
            RequestButton.current.innerHTML = "Removing...";
            setTimeout(() => {
              RequestButton.current.innerHTML = "Send Request";
            }, 2000);
          }
       }
      }, [Btn]);


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[25vw] h-[30vw] flex flex-col gap-[2vw] justify-center items-center rounded-xl border-[1px] border-solid border-gray-300 shadow-lg bg-[aliceblue;] ">
        <img
          className="w-[10vw] h-[10vw] rounded-full object-cover object-top"
          src="https://imgs.search.brave.com/tUYESjODwxz0NCf2ZyBlElFxs8GnjhQjFWyAOk9rwEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/YWFiOTU2ZDhmNmEz/LWpvaG5ueWRlcHAu/anBn"
          alt=""
        />
        <div className="font-semibold text-2xl font-[gilroy]">Jhonny Depp</div>
        <div className="w-[60%] text-center">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <button
          onClick={()=>{
            Btnhadler();
          }}
          ref={RequestButton}
          className="w-[55%] h-[3vw] bg-blue-500 text-white rounded-lg shadow-lg active:scale-[98%] text-xl font-[gilroy] font-semibold"
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default RquestCard;
