import React, { useEffect, useRef, useState } from "react";

const Bulb = () => {
  const [x, setx] = useState(1);
  const BottonHandler = () => {
    x = x === 1 ? setx(0) : setx(1);
  };
  const light = useRef(null);
  const bulb = useRef(null);
  useEffect(() => {
    if (x === 1) {
      light.current.innerHTML = "ONN";
      bulb.current.style.backgroundColor = "yellow";
      bulb.current.style.boxShadow = "0px 0px 15px 15px rgb(255,255,100)";
    } else {
      light.current.innerHTML = "OFF";
      bulb.current.style.backgroundColor = "transparent";
      bulb.current.style.backdropFilter = 'blur(5px)';
      bulb.current.style.boxShadow = "0px 0px 15px 0px rgb(255,0,0)";
    }
  }, [x]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center space-y-20">
        <div ref={bulb} className="w-[30vh] h-[30vh] bg-yellow-500 border-[2px]  border-solid rounded-full shadow-[0px_0px_15px_15px_rgb(255,255,100)]"></div>
        <button
          ref={light}
          onClick={BottonHandler}
          className="px-[3vw] py-[1vw] border-[1px] border-solid border-gray-500 active:scale-95 backdrop-blur-[5px] rounded-md text-white "
        > 
          ONN
        </button>
      </div>
    </div>
  );
};

export default Bulb;
