import utilStyles from "../styles/utils.module.css";

const GeeMehthods = () => {
  return (
    <div>
      <div class="  md:mt-10 mt-4 rounded-md bg-sky-100 ">
        <div class="m-auto max-w-sm py-10 md:max-w-2xl ">
          <div className="pb-10">
            <p className={`${utilStyles.heading2Xl} text-center`}>
              You want to get it
              <span className="text-purple-400"> right.</span>
            </p>
            <p className={`${utilStyles.subHeading} text-center`}>
              I understand that it could be overwhelming trying to find solution
              on your own. And you don't have time for another failed attempt.
            </p>
          </div>
          <div
            class={`font-semibold text-lg grid justify-items-center md:grid-cols-3`}
          >
            <div className="col-span-2">
              <ul>
                <li className="pb-3">
                  ✅ We use evidence-based scientific learning methods
                </li>
                <li className="pb-3">
                  ✅ We tailor to each student's motivation, interests, and
                  learning needs
                </li>
                <li className="pb-3">
                  ✅ We help you to estabilish your own learning routine
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3">❌ Memorize vocabulary</li>
                <li className="pb-3">❌ Fear to make mistakes</li>
                <li className="pb-3">❌ Seperate English from your life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeeMehthods;
