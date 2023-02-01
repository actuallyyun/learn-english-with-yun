import utilStyles from "../styles/utils.module.css";
import proseStyles from "../styles/prose.module.css";

const Testimony = () => {
  return (
    <div>
      <div className="px-5  pt-6 md:pt-10 dark:text-slate-200  text-gray-700">
        <p className={`text-center ${utilStyles.heading2Xl}`}>
          Loved by hundreds of English learners{" "}
        </p>
        <div
          className={`grid md:grid-cols-2 md:py-10 py-5 grid-cols-1 gap-4 ${proseStyles.testimony} m-auto`}
        >
          <div className="flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg ">
            <section>
              <p className="text-md leading-normal">
                This program helped me to feel more confident when speakin
                English. I find it particularly helpful by setting task for me,
                which are specific goals in weekly basis. These tasks{" "}
                <span className="italic">force</span> me to invest more time and
                reflect deeper on something. sometimes I just let it go, but to
                learn is to practice really."
              </p>
            </section>
            <footer className="text-gray-600 text-xs leading-normal font-mono pt-2">
              <div className="flex items-center">
                <div className="flex-grow w-10 overflow-hidden rounded-full relative mr-3">
                  <img src="/images/404.jpeg/" alt="" />
                </div>
                <div className="w-full">
                  <span> Yifan about General English Program</span>
                </div>
              </div>
            </footer>
            <div className="absolute top-1 left-0 md:top-4 md:left-4 font-serif text-4xl text-gray-300 leading-none">
              “
            </div>
          </div>
          <div className="flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg ">
            <section>
              <p className="text-md leading-normal">
                I enjoyed all my English classes and found them valuable. The
                learning materials are interesting. My coach gave me a lot of
                useful feedback, and also recommendations of learning methods.
                She also made me to find language partners and make friends with
                them."
              </p>
            </section>
            <footer className="text-gray-600 text-xs leading-normal font-mono pt-2">
              <div className="flex items-center">
                <div className="flex-grow w-10 overflow-hidden rounded-full relative mr-3">
                  <img src="/images/404.jpeg/" alt="" />
                </div>
                <div className="w-full">
                  <span> Douzi about English Pragamatics Program</span>
                </div>
              </div>
            </footer>
            <div className="absolute top-1 left-0 md:top-4 md:left-4 font-serif text-4xl text-gray-300 leading-none">
              “
            </div>
          </div>
          <div className="flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg ">
            <section>
              <p className="text-md leading-normal">
                I've gained a lot of various and practical learning material
                from Yun, from concrete methods a nd expressions like giving
                feedback and advice, writing Emails, to videos and podcast of
                specific topics. 2. With the help of this program I've started
                writing learning journals, which triggered my interest in
                writing in English. 3. I 've got a great podcast program to
                shadow. "
              </p>
            </section>
            <footer className="text-gray-600 text-xs leading-normal font-mono pt-2">
              <div className="flex items-center">
                <div className="flex-grow w-10 overflow-hidden rounded-full relative mr-3">
                  <img src="/images/404.jpeg/" alt="" />
                </div>
                <div className="w-full">
                  <span> Yidao about Business English Program</span>
                </div>
              </div>
            </footer>
            <div className="absolute top-1 left-0 md:top-4 md:left-4 font-serif text-4xl text-gray-300 leading-none">
              “
            </div>
          </div>
          <div className="flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg ">
            <section>
              <p className="text-md leading-normal">
                This program helped me to feel more confident when speakin
                English. I find it particularly helpful by setting task for me,
                which are specific goals in weekly basis. These tasks{" "}
                <span className="italic">force</span> me to invest more time and
                reflect deeper on something. sometimes I just let it go, but to
                learn is to practice really."
              </p>
            </section>
            <footer className="text-gray-600 text-xs leading-normal font-mono pt-2">
              <div className="flex items-center">
                <div className="flex-grow w-10 overflow-hidden rounded-full relative mr-3">
                  <img src="/images/404.jpeg/" alt="" />
                </div>
                <div className="w-full">
                  <span> Liumin about IELTS Preparation Program</span>
                </div>
              </div>
            </footer>
            <div className="absolute top-1 left-0 md:top-4 md:left-4 font-serif text-4xl text-gray-300 leading-none">
              “
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
