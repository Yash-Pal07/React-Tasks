import React, { useState, useRef, useEffect } from "react";
import Oggy from "./assets/Oggy.png";

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const image = useRef(null);
  const parentDiv = useRef(null);

  useEffect(() => {
    const handlechange = (e) => {
      if (parentDiv.current && image.current) {
        const parentBounds = parentDiv.current.getBoundingClientRect();
        const imageBounds = image.current.getBoundingClientRect();

        if (e.key === "ArrowLeft") {
          setX((prev) => Math.max(prev - 1, 0));
          image.current.style.transform = 'scaleX(1)'
        }
        if (e.key === "ArrowRight") {
          setX((prev) =>
            Math.min(prev + 1, (parentBounds.width - imageBounds.width)/parentBounds.width *100))
            image.current.style.transform = 'scaleX(-1)'
        };
        
        if (e.key === "ArrowUp") {
          setY((prev) => Math.max(prev - 1, 5));
          image.current.style.transform = 'rotate(90deg)'
        }
        if (e.key === "ArrowDown") {
          setY((prev) =>
            Math.min(prev + 1, (parentBounds.height - imageBounds.height) / parentBounds.height * 100)
          );
          image.current.style.transform = 'rotate(-90deg) scaleX(1)'
        }
      }
    };

    window.addEventListener("keydown", handlechange);

  },[] );

  useEffect(() => {
    if (image.current) {
      image.current.style.top = Y + "%";
      image.current.style.left = X + "%";
    }
  }, [X, Y]);

  return (
    <div
      ref={parentDiv}
      className="w-[100vw] h-[100vh] relative overflow-hidden"
    >
      <img
        ref={image}
        className="w-[20vw] scale-x-[-1] absolute"
        src={Oggy}
        alt="Oggy"
      />
    </div>
  );
};

export default App;
