import proseStyles from "../styles/prose.module.css";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollWrapper = ({ children }) => {
  return <div className="flex md:py-10">{children}</div>;
};

const ScrollAreaHeartBeat = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      className={`${utilStyles.backGroundImageBlackRadient} bg-cover  bg-no-repeat  mt-10 rounded-lg`}
    >
      <ScrollWrapper>
        <div
          ref={ref}
          className={`${inView ? utilStyles.show : ""} ${utilStyles.hidden}`}
          id="#scrollArea"
        >
          <div className="w-3/4 m-auto text-black sm:text-slate-50">
            <p className={`${utilStyles.heading2Xl} pb-5`}>
              Our English is not good enough
            </p>
            <div className={`${proseStyles.prose}`}>
              <p className="font-bold">The stories we tell ourselves.</p>
              <div className="md:pt-3">
                <p>My English is bad.</p>
                <p>My pronunciation is terrible.</p>
                <p>I'm not good at English.</p>
                <p>I will never be able to learn it.</p>
                <br></br>
                <p>
                  We thought we have to memorize more vocabulary, to correct our
                  pronunciations, to eliminate all the grammatical errors before
                  we can start using it.
                </p>
              </div>

              <p className="font-bold pt-3">
                You won't learn if you don't start using your good enough
                English.
              </p>
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default ScrollAreaHeartBeat;
