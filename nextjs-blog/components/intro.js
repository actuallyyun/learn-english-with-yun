import utilStyles from "../styles/utils.module.css";
import Stars from "../components/stars";
import Arrow from "../components/arrow";
import Image from "next/image";
import introPic from "../public/images/pramod-tiwari-mvEG9mqVmcw-unsplash.jpg";

const Intro = () => {
  return (
    <div>
      <div className="relative">
        <div className={`${utilStyles.bgImage} absolute z-0 `}>
          <Image
            src={introPic}
            alt="intro background image"
            fill
            priority
            className="rounded-lg"
          />
        </div>
        <div
          className={`flex flex-col items-center text-center pt-8 ${utilStyles.introSectionHeight} z-10 relative`}
        >
          <div className="h-full sm:pt-20 pt-10 flex flex-col items-center justify-center">
            <div>
              <div className="inline-flex">
                <Stars />
              </div>
              <div className={`block ${utilStyles.introTextHeight}`}>
                <p
                  className={`font-semibold text-white pt-8 px-5 md:max-w-3xl sm:pt-0 ${utilStyles.heading2Xl}`}
                >
                  Your English is Great. <br></br>Use English With Confidence
                  <br></br>Right Now
                </p>
              </div>
            </div>
            {/* Intro arrow*/}
            <div className="flex items-center justify-center w-full h-full">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
