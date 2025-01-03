import React, { useRef } from "react";
import { useState } from "react";
import Swipers from "./Swipers";

const App = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [Itemtoshow, setItemtoshow] = useState(null);

  const Btnhandler = (e) => {
    setIsUserVisible(!isUserVisible);
    if (e) {
      setItemtoshow(e);
    }
  };
  const [Data, setData] = useState([
    {
      id: 0,
      username: "John Doe",
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "I'm good, thanks! What about you?",
      messages: [
        { from: "You", text: "Hey John! How are you?", time: "10:00 AM" },
        {
          from: "John Doe",
          text: "I'm good, thanks! What about you?",
          time: "10:02 AM",
        },
      ],
    },
    {
      id: 1,
      username: "Jane Smith",
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
      lastMessage: "Great! Let me know if you need anything else.",
      messages: [
        {
          from: "You",
          text: "Hi Jane! Did you get the files?",
          time: "11:15 AM",
        },
        {
          from: "Jane Smith",
          text: "Yes, I did. Thanks for sending them!",
          time: "11:17 AM",
        },
        {
          from: "You",
          text: "Great! Let me know if you need anything else.",
          time: "11:18 AM",
        },
      ],
    },
    {
      id: 2,
      username: "Sam Wilson",
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      lastMessage: "Yes, absolutely. See you at 2 PM.",
      messages: [
        {
          from: "Sam Wilson",
          text: "Hey! Are we still on for the meeting?",
          time: "12:30 PM",
        },
        {
          from: "You",
          text: "Yes, absolutely. See you at 2 PM.",
          time: "12:32 PM",
        },
      ],
    },
    {
      id: 3,
      username: "Lisa Wong",
      imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
      lastMessage: "Thank you, Lisa! 😊",
      messages: [
        { from: "Lisa Wong", text: "Happy Birthday! 🎉", time: "09:00 AM" },
        { from: "You", text: "Thank you, Lisa! 😊", time: "09:05 AM" },
      ],
    },
    {
      id: 4,
      username: "Michael Brown",
      imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
      lastMessage: "Yes! What a match!",
      messages: [
        {
          from: "You",
          text: "Did you watch the game last night?",
          time: "08:45 PM",
        },
        { from: "Michael Brown", text: "Yes! What a match!", time: "08:47 PM" },
      ],
    },
    {
      id: 5,
      username: "Sophia Taylor",
      imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
      lastMessage: "Yes, I'll be there!",
      messages: [
        {
          from: "Sophia Taylor",
          text: "Are you coming to the party?",
          time: "02:00 PM",
        },
        { from: "You", text: "Yes, I'll be there!", time: "02:05 PM" },
      ],
    },
    {
      id: 6,
      username: "David Green",
      imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
      lastMessage: "Sure, I'll email it to you shortly.",
      messages: [
        {
          from: "You",
          text: "Hey David, can you send me the report?",
          time: "10:00 AM",
        },
        {
          from: "David Green",
          text: "Sure, I'll email it to you shortly.",
          time: "10:05 AM",
        },
      ],
    },
    {
      id: 7,
      username: "Emma White",
      imgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
      lastMessage: "Good morning, Emma!",
      messages: [
        { from: "Emma White", text: "Good morning!", time: "08:00 AM" },
        { from: "You", text: "Good morning, Emma!", time: "08:02 AM" },
      ],
    },
    {
      id: 8,
      username: "Chris Hall",
      imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
      lastMessage: "Will do, thanks!",
      messages: [
        {
          from: "Chris Hall",
          text: "Let me know if you need help.",
          time: "03:15 PM",
        },
        { from: "You", text: "Will do, thanks!", time: "03:17 PM" },
      ],
    },
    {
      id: 9,
      username: "Mia Clark",
      imgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
      lastMessage: "Pretty good, how about yours?",
      messages: [
        { from: "Mia Clark", text: "How's your day going?", time: "04:00 PM" },
        {
          from: "You",
          text: "Pretty good, how about yours?",
          time: "04:02 PM",
        },
      ],
    },
   
  ]);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[25vw] relative h-[35vw] border-[2px] overflow-hidden border-solid border-gray-400 bg-white rounded-2xl Text">
        {isUserVisible && (
          <div className="w-full h-full bg-white absolute z-[3] pt-[2vw]">
            <div className="h-[15%] flex justify-between items-center border-b-[1px] border-solid border-gray-400 mb-[1vw]">
              <div className="flex gap-[.5vw] items-center px-[1vw]">
                <i
                  onClick={Btnhandler}
                  className="ri-arrow-left-long-fill text-2xl font-extralight cursor-pointer"
                ></i>
                <img
                  className="w-[2.5vw] h-[2.5vw] rounded-full object-cover object-center"
                  src={Itemtoshow.imgSrc}
                  alt=""
                />
                <h1 className="font-bold text-xl">{Itemtoshow.username}</h1>
              </div>
              <div className="flex gap-[.5vw] items-center px-[1vw]">
                <i className="ri-phone-fill text-xl"></i>
                <i className="ri-video-on-fill text-xl"></i>
                <i className="ri-more-2-fill text-xl"></i>
              </div>
            </div>
            {Data.map((items, idx) => {
              if (items.id === Itemtoshow.id) {
                return (
                  <div key={idx} className="w-full h-[85%]  px-[1vw] pt-[.5vw]">
                    {items.messages.map((msg, idx) => {
                      if (msg.from === "You") {
                        return (
                          <div
                            key={idx}
                            className="max-w-[60%]  min-w-[5%] w-fit h-fit text-sm rounded-lg mb-[.5vw] p-[.4vw] bg-green-500 shadow-lg border-none leading-tight"
                          >
                            {msg.text}
                            <p className="text-[10px] w-full text-end ">{msg.time}</p>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={idx}
                            className="w-full h-fit flex justify-end"
                          >
                            <div className="max-w-[60%] min-w-[5%] w-fit h-fit text-sm mb-[.5vw] rounded-lg p-[.4vw] bg-gray-200 shadow-lg border-none">
                              {msg.text}
                              <p className="text-[10px] w-full text-end ">{msg.time}</p>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              }
            })}
          </div>
        )}

        <div className="flex justify-between w-full px-[1vw] py-[.2vw] bg-gray-200 absolute z-[4]">
          <div>12:00</div>
          <div className="flex gap-[.3vw]">
            <i className="ri-wifi-line"></i>
            <i className="ri-signal-tower-fill"></i>
            <i className="ri-battery-charge-line"></i>
          </div>
        </div>
        <div className="w-full h-[17%] bg-white flex flex-col justify-end pb-[.5vw] border-b-[2px] border-solid border-gray-400">
          <h1 className="font-bold text-green-600 text-3xl px-[.7vw]">
            WhatsApp
          </h1>
        </div>

        <Swipers data={Data} Onclickhandler={Btnhandler} />
      </div>
    </div>
  );
};

export default App;
