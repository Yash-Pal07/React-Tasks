import React, { useEffect, useRef, useState } from "react";

const App = () => {
  var [Progress, setProgress] = useState(0);
  const [Click, setClick] = useState(false);
  const Downloadbar = useRef(null);
  const Text = useRef(null);
  const Downlodbtn = useRef(null);
  const Btnhandler = () => {
    setClick(!Click);
  };

  useEffect(() => {
    if (Click) {
      var interval = setInterval(() => {
        setProgress((prevprogress) => prevprogress + 1);
        Downlodbtn.current.innerHTML = "Downloading...";
      }, 50);
      setTimeout(() => {
        clearInterval(interval);
        Downlodbtn.current.disabled = true;
        Downlodbtn.current.style.opacity = "60%";
        Downlodbtn.current.innerHTML = "Downloaded";
      }, 5000);
    } else {
      return clearInterval(interval);
    }
  }, [Click]);
  

  useEffect(() => {
    Text.current.innerHTML = `${Progress}%`;
    Downloadbar.current.style.width = `${Progress}%`;
  }, [Progress]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[30vw] h-[15vw] relative bg-white shadow-lg rounded-lg flex flex-col justify-between items-start px-[2vw] py-[4vw]">
        <div
          ref={Text}
          className="absolute right-[10%] top-[10%] text-xl font-semibold font-[gilroy]"
        >
          0%
        </div>
        <div className="w-full h-[1vw] bg-gray-200 rounded-full overflow-hidden">
          <div ref={Downloadbar} className="w-[0%] h-full bg-green-500"></div>
        </div>
        <button
          ref={Downlodbtn}
          onClick={Btnhandler}
          className="px-[2vw] py-[.8vw] text-white font-[gilroy] shadow-lg active:scale-[99%] rounded-lg bg-blue-600"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default App;
