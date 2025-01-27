import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap"

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    gsap.to(wordGroupsRef.current, {
      yPercent: -80,
      duration: 5,
      ease: 'power3.inOut'
    });

    gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 5,
      ease: 'power3.inOut'
    });

  }, [])

  return (
    <div style={{ position: "fixed" }} ref={loaderRef} className="wrapper relative h-full w-full inset-0 overflow-hidden">
      <div className=" progressWrapper absolute bottom-0 left-0 h-[5vh] w-full z-[3]">
        <div 
          ref={progressRef}
          className="h-full w-full bg-black scale-x-0 origin-[left_center]" 
        />
        <span 
          ref={progressNumberRef}
          className="progressNumber absolute left-[-5vw] top-1/2 z-[4] -translate-y-1/2 whitespace-nowrap 
        text-white text-[3.2rem]">
          0
        </span>
      </div>
      <div 
        style={{
          clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
        className="loader h-full w-full bg-white overflow-hidden z-[2] 
        flex flex-col justify-center items-center ">
        <div className="words relative overflow-hidden h-[41.8rem]">
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) 47%, transparent, transparent 47%, transparent, transparent 55%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.9))' 
            }}
            className="overlay absolute inset-0 h-full z-[2]"
          />
          <div className="wordsGroup" ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className="word block text-[3.2rem] font-bold text-black">
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