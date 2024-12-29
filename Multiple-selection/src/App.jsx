import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [Data, setData] = useState([
    { name: "Cap", image: "", description: "", price: "" },
    { name: "Topa", image: "", description: "", price: "" },
    { name: "Topi", image: "", description: "", price: "" },
  ]);

  const Button = useRef([]);

  useEffect(() => {
    Button.current.forEach((button) => {
      if (button) {
        button.style.backgroundColor = "red";
      }
    });
  });
  return (
    <div className="w-[100vw] h-[100vh] flex justify-evenly items-center">
      {Data.map((data, idx) => {
        return (
          <div className="card w-[20vw] h-[25vw] bg-white rounded-lg shadow-lg flex flex-col justify-evenly items-center">
            <img
              className="w-[90%] h-[60%] rounded-lg object-cover"
              src="https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1 className="text-xl font-semibold font-[gilroy]">{data.name}</h1>
            <p className="text-center text-xs w-[80%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              ref={(elem) => (Button.current[idx] = elem)}
              className="px-[2vw] py-[.5vw] bg-blue-500 text-white rounded-lg"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
