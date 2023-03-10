import utilStyles from "../styles/utils.module.css";

const Join = () => {
  return (
    <div>
      <div
        class={`rounded-lg ${utilStyles.backGroundImagePinkPattern} bg-no-repeat bg-cover	`}
      >
        <div class="m-auto grid w-3/4 justify-center py-20 text-center">
          <div class="text-white">
            <div class="m-auto mb-8 w-2/3 md:w-full">
              <h1 class={`${utilStyles.heading2Xl}`}>Ready to get started?</h1>
            </div>
            <button class="mb-8 h-10 rounded-md bg-white">
              <a href="https://calendly.com/this-jiyun/english-class?month=2023-01">
                <span class="px-6 py-4 text-lg font-semibold text-pink-400">
                  Book a trial lesson
                </span>
              </a>
            </button>
            <p class="text-lg font-semibold">
              The beautiful thing about learning is that nobody can take it away
              from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
