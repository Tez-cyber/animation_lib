import React, { useEffect, useRef } from "react";
import { words } from "./data";

// import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className="relative h-full w-full inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[5vh] w-full z-[3]">
        <div className="h-full w-full bg-black scale-0 origin-[left_center]"></div>
        <span className="absolute left-[-5vw] top-1/2 z-[4] whitespace-nowrap 
        text-white text-[3.2rem]">0</span>
      </div>
      <div 
        style={{
          clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
        className="h-full w-full bg-white overflow-hidden z-[2] 
        flex flex-col justify-center items-center ">
        <div className="relative overflow-hidden h-[41.8rem]">
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) 47%, transparent, transparent 47%, transparent, transparent 55%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.9))' 
            }}
            className="absolute inset-0 h-full z-[2]"
          />
          <div className="">
            {words.map((word, index) => {
              return (
                <span key={index} className="block text-[3.2rem]">
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;