import proseStyles from "../styles/prose.module.css";
import utilStyles from "../styles/utils.module.css";
import { Typewriter } from "react-simple-typewriter";

const Stuck = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-9">
      <div
        className={`${proseStyles.prose} mx-auto p-8 text-xl flex flex-col justify-end text-gray-600 dark:text-gray-800`}
      >
        <p>We have all been there.</p>
        <p>
          We feel our English is not good enough. We could not find the right
          word. We just made a grammar mistake. We used the wrong vocabulary. We
          worried about not making any sense.
        </p>
        <p>
          We became self-conscious. Our cheeks began to flush, and we started
          panicking.
        </p>
        <p className="pt-10 pb-10 md:pb-20 text-purple-600">
          <Typewriter
            words={[
              "wrong",
              "embarrsing",
              "what am i doing here??",
              "i can't talk...",
              "..",
              "...",
            ]}
            loop={6}
            cursor
            cursorStyle="."
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div
        className={`dark:brightness-75 bg-no-repeat bg-cover w-full bg-background ${utilStyles.backGroundImageStuckPattern} rounded-lg flex flex-col justify-center`}
      >
        <div className="text-center">
          <p className="text-2xl  text-gray-50">We were stuck 😢</p>
        </div>
      </div>
    </div>
  );
};

export default Stuck;
