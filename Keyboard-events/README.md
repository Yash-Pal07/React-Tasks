import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const image = useRef(null);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") {
        setX((prev) => prev - 10); // Adjust step size as needed
      }
      if (e.key === "ArrowRight") {
        setX((prev) => prev + 10);
      }
      if (e.key === "ArrowUp") {
        setY((prev) => prev - 10);
      }
      if (e.key === "ArrowDown") {
        setY((prev) => prev + 10);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (image.current) {
      image.current.style.top = Y + "px";
      image.current.style.left = X + "px";
    }
  }, [X, Y]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        ref={image}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
};

export default App;
