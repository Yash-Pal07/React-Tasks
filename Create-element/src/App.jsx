import React from "react";
import inc1 from "./assets/inc1.png";
import inc2 from "./assets/inc2.png";
import inc3 from "./assets/inc3.png";
import inc4 from "./assets/inc4.png";
import inc5 from "./assets/inc5.png";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const images = [inc1, inc2, inc3, inc4, inc5];
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Curimage, setCurimage] = useState(null);
  const Imagediv = useRef(null);
  const Btnhandler = () => {
    if (Imagediv.current) {
      setX(Math.random() * 92);
      setY(Math.random() * 92);
      setCurimage(images[Math.floor(Math.random() * 5)]);
    }
  };
  useEffect(() => {
    if (Imagediv.current && X && Y && Curimage) {
      const newDiv = document.createElement("img");
      newDiv.src = Curimage;
      newDiv.style.position = "absolute";
      newDiv.style.top = Y + "%";
      newDiv.style.left = X + "%";
      newDiv.style.width = "6vw";
      Imagediv.current.appendChild(newDiv);
    }
  }, [X, Y]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-[2vw] flex-col">
      <div
        ref={Imagediv}
        className=" overflow-hidden w-[80%] h-[70%] relative shadow-lg bg-white rounded-lg border-[2px] border-solid border-gray-400"
      ></div>
      <button
        onClick={Btnhandler}
        className="px-[3vw] py-[1vw] text-white font-semibold font-[gilroy] active:scale-[99%] bg-blue-500 rounded-lg shadow-lg"
      >
        Generate Element
      </button>
    </div>
  );
};

export default App;
