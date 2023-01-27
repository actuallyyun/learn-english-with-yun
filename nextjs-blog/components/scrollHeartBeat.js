import proseStyles from "../styles/prose.module.css";
import { Typewriter } from "react-simple-typewriter";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import { useInView } from "react-intersection-observer";

const Heartbeat = () => {
  return (
    <div className="flex flex-row items-center m-auto justify-start py-20 animate-pulse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="red"
        class="w-14 h-14"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  );
};

const ScrollWrapper = ({ children }) => {
  return <div className="flex">{children}</div>;
};

const ScrollAreaHeartBeat = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={`${proseStyles.prose} mx-auto p-8 text-xl pt-20`}>
      <Heartbeat />
      <ScrollWrapper>
        <div
          ref={ref}
          className={`  ${inView ? utilStyles.show : ""} ${utilStyles.hidden}`}
          id="#scrollArea"
        >
          <div className="">
            <p className={`${utilStyles.heading2Xl} pb-10`}>
              We feel we are not good enough
            </p>
            <p className="font-bold">Stories we tell ourselves.</p>
            <div className="text-gray-600 pt-3">
              <p>My English is bad.</p>
              <p>My pronunciation is terrible.</p>
              <p>I'm not good at English.</p>
              <p>I will never be able to learn it.</p>
              <p>
                We thought we have to memorize more vocabulary, to correct our
                pronunciations, to eliminate all the grammatical errors.{" "}
              </p>
            </div>

            <p className="font-bold pt-3">
              You <span className="text-purple-600">WON'T</span> learn if you
              don't believe you can learn
            </p>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default ScrollAreaHeartBeat;
