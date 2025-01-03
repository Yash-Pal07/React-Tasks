import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Swipers = ({data, Onclickhandler}) => {
  const Clickhandler = (e) => {
    console.log(e);
  };

  return (
    <Swiper
      className="h-[83%] w-full"
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-full h-full overflow-y-scroll Text ">
          {data.map((items) => {
            return (
              <div
                onClick={() => Onclickhandler(items)}
                key={items.id}
                className="w-full mt-[.5vw] pb-[.5vw] cursor-pointer h-[15%] px-[1vw] border-b-[1px] border-solid border-gray-400"
              >
                <div className="w-full h-full flex items-center">
                  <div className="w-[20%] ">
                    <img
                      className="w-[4vw] h-[4vw] rounded-full object-cover object-top"
                      src={items.imgSrc}
                      alt=""
                    />
                  </div>
                  <div className="w-[80%]  h-full px-[1vw]">
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold font-[gilroy] py-[.3vw]">
                        {items.username}
                      </h1>
                      <h3 className="text-[.8vw]">
                        {items.messages[items.messages.length - 1].time}
                      </h3>
                    </div>
                    <p className="text-xs truncate">
                      {items.messages[items.messages.length - 1].from}:{" "}
                      {items.messages[items.messages.length - 1].text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full overflow-y-scroll Text">
          <div className="w-full h-[15%] px-[1.5vw] flex  items-center border-b-[1px] border-solid border-gray-400">
          <div className=" w-[3vw] relative rounded-full h-[3vw] bg-gray-300 flex justify-center items-center">
            <i className="ri-user-fill "></i>
            <i className="ri-add-line absolute bottom-[-15%] text-xl right-[-5%]"></i></div>
          <div className="ml-[1.5vw]">
            <h1 className="text=[1vw] font-semibold">My Status</h1>
            <p className="text-sm">Tap to add status</p>
          </div>
          </div>
          <h3 className="w-full h-[5%] px-[.5vw] text-xs p-[.3vw] bg-slate-400">Recent Updates</h3>
          <div className="w-full h-[80%]  overflow-y-scroll Text">
            {data.map((items) => {
              return <div onClick={()=>{
                Clickhandler(items)
              }} className="w-full h-[20%] border-b-[1px] border-solid flex items-center px-[1vw]">
              <img className="w-[3vw] h-[3vw] border-[2px] border-solid border-green-400 bg-gray-500 rounded-full object-cover object-center" src={items.imgSrc} alt="" />
              <div className="ml-[1vw]">
                <h1 className="text-lg font-semibold">{items.username}</h1>
              <p className="text-xs">{items.messages[items.messages.length -1].time}</p>
              </div>
            </div>
            })}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
