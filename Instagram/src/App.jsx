import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      username: "John Doe",
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      username: "Jane Smith",
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      username: "Sam Wilson",
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      username: "Lisa Wong",
      imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      username: "Michael Brown",
      imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      username: "Sophia Taylor",
      imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      username: "David Green",
      imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      username: "Emma White",
      imgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      username: "Chris Hall",
      imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      username: "Mia Clark",
      imgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      username: "Oliver Scott",
      imgSrc: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      username: "Ava Miller",
      imgSrc: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 13,
      username: "Ethan Davis",
      imgSrc: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 14,
      username: "Isabella Lee",
      imgSrc: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 15,
      username: "William Harris",
      imgSrc: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ]);

  const [isDisplay, setIsDisplay] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressBarRef = useRef(null);

  const clickHandler = (user) => {
    setCurrentUser(user.imgSrc);
    setIsDisplay(true);
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
        }
        return prev + 1;
      });
    }, 50);
  };

  const backHandler = () => {
    clearInterval(intervalRef.current);
    setProgress(0);
    setIsDisplay(false);
  };

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }

    if (progress >= 100) {
      setTimeout(() => {
        setIsDisplay(false);
        setProgress(0);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-[25vw] relative h-[75vh] bg-white rounded-lg overflow-hidden">
  
        <div className="Notification flex justify-between w-full px-[1vw] py-[.2vw] bg-gray-200 absolute z-[4]">
          <div>12:00</div>
          <div className="flex gap-[.3vw]">
            <i className="ri-wifi-line"></i>
            <i className="ri-signal-tower-fill"></i>
            <i className="ri-battery-charge-line"></i>
          </div>
        </div>

        {isDisplay && (
          <div className="w-full h-full bg-black absolute z-[3]">
            <div className="w-full absolute pt-[2.5vw] px-[1vw] text-white z-[2]">
              <div className="flex items-center gap-[1vw]">
                <i
                  onClick={backHandler}
                  className="ri-arrow-left-long-line font-extralight text-3xl cursor-pointer"
                ></i>
                <h1 className="font-semibold font-[gilroy] text-lg">
                  {data.find((item) => item.imgSrc === currentUser)?.username ||
                    ""}
                </h1>
              </div>
              <div className="w-full h-[.3vw] bg-slate-400 rounded-lg overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover object-center"
                src={currentUser}
                alt="User status"
              />
            </div>
          </div>
        )}

        <div className="w-full h-[30%] flex items-center border-b-[2px] border-gray-400">
          <div className="w-full h-full flex gap-[1vw] items-end py-[.5vw] px-[1vw] overflow-x-auto Text">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => clickHandler(item)}
                className="cursor-pointer w-fit flex flex-col justify-center"
              >
                <div className="story-div w-[5vw] h-[5vw] rounded-full flex items-center justify-center">
                  <img
                    className="w-[93%] h-[93%] rounded-full object-cover object-center"
                    src={item.imgSrc}
                    alt={item.username}
                  />
                </div>
                <h1 className="font-semibold font-[gilroy] text-nowrap text-center">
                  {item.username}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;