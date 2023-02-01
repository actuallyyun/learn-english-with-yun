import proseStyles from "../styles/prose.module.css";
import utilStyles from "../styles/utils.module.css";

import { useInView } from "react-intersection-observer";

const ScrollWrapper = ({ children }) => {
  return <div className="flex md:py-10">{children}</div>;
};

const Stuck = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <ScrollWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-9">
        <div
          ref={ref}
          className={`${inView ? utilStyles.show : ""} ${utilStyles.hidden}`}
          id="#scrollArea"
        >
          <div
            className={`${proseStyles.prose} mx-auto p-8 text-xl flex flex-col justify-end  dark:text-slate-50`}
          >
            <p>We have all been there.</p>
            <p>
              We felt our English is not good enough. We could not find the
              right word. We just made a grammar mistake. We used the wrong
              vocabulary. We worried about not making any sense.
            </p>
            <p>
              We became self-conscious. Our cheeks began to flush, and we
              started panicking.
            </p>
            <p>We could not talk.</p>
          </div>
        </div>

        <div
          className={`dark:brightness-75 bg-no-repeat bg-cover w-full bg-background ${utilStyles.backGroundImageStuckPattern} rounded-lg flex flex-col justify-center`}
        >
          <div
            ref={ref}
            className={`${inView ? utilStyles.show : ""} ${utilStyles.hidden}`}
            id="#scrollArea"
          >
            <div className="text-center">
              <p className="text-2xl  text-gray-50">We were stuck 😢</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default Stuck;
