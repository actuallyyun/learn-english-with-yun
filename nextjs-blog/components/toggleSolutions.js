import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import { useState } from "react";

const Motivation = ({ showMotivation }) => {
  return (
    <div
      className={`${showMotivation ? "" : "hidden"} grid md:grid-cols-2 gap-7`}
    >
      <div>
        <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl} `}>
          Find what motivates you and leverage it for your learning.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          soluta vero distinctio eligendi. Consequuntur autem excepturi maxime,
          repudiandae quisquam perferendis quam eveniet ut non voluptatibus
          labore molestias. Officia, iste molestiae.
        </p>
      </div>
      <div className="">
        <Image
          src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg"
          alt="picture says love to learn"
          width={500}
          height={350}
          className={"mt-4"}
        />
      </div>
    </div>
  );
};
const Mindful = ({ showMindful }) => {
  return (
    <div className={`${showMindful ? "" : "hidden"} grid md:grid-cols-2 gap-7`}>
      <div>
        <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl}`}>
          Learning a languge needs A LOT OF practice.
        </p>
        <p>
          However, not all practice is created equal. To optimize learning, we
          need to be alert, focused, and aware of what we are learning.{" "}
        </p>
        <p>
          What does this mean? Have your tried to learn English by watching TV
          series but never felt that you have made progress? Well your learning
          pratice is perhaps not mindful enough.
        </p>
      </div>
      <div className="flex justify-end grow-0">
        <Image
          src="/images/katerina-may-6CLBoiWuzSU-unsplash.jpg"
          alt="mindful practice"
          width={500}
          height={350}
          className={"mt-4"}
        />
      </div>
    </div>
  );
};
const Consistency = ({ showConsistency }) => {
  return (
    <div
      className={`${showConsistency ? "" : "hidden"} grid md:grid-cols-2 gap-7`}
    >
      <div>
        <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl}`}>
          Getting better at anything takes a long time
        </p>
        <p>
          Never mind the 10,000 hours law. Getting better at anything takes a
          long time, let alone a complex skill such as acquiring a new language.
        </p>

        <p>Learning English needs to be a part of your life.</p>
        <p>
          You are not going to get noticeablely better next week, even the next
          month. But if you learn consistently, you will see progress.{" "}
        </p>
      </div>
      <div className="flex justify-end grow-0">
        <Image
          src="/images/aaron-burden-QJDzYT_K8Xg-unsplash.jpg"
          alt="consistency is key"
          width={500}
          height={350}
          className={"mt-4"}
        />
      </div>
    </div>
  );
};

const ToggleSolutions = () => {
  const [showMotivation, setShowMotivtion] = useState(true);
  const [motivationIsClicked, setMotivationIsClicked] = useState(true);
  const [showMindful, setShowMindful] = useState(false);
  const [mindfulIsClicked, setMindfulIsClicked] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);
  const [consistencyIsClicked, setConsistencyIsClicked] = useState(false);

  const handleShowMotivation = (event) => {
    setShowMotivtion(true);
    setShowMindful(false);
    setShowConsistency(false);

    setMotivationIsClicked(true);
    setMindfulIsClicked(false);
    setConsistencyIsClicked(false);
  };

  const handleShowMindful = (event) => {
    setShowMindful(true);
    setShowMotivtion(false);
    setShowConsistency(false);

    setMotivationIsClicked(false);
    setMindfulIsClicked(true);
    setConsistencyIsClicked(false);
  };

  const handleShowConsistency = () => {
    setShowConsistency(true);
    setShowMindful(false);
    setShowMotivtion(false);

    setMotivationIsClicked(false);
    setMindfulIsClicked(false);
    setConsistencyIsClicked(true);
  };

  return (
    <>
      <div className="flex flex-row m-auto w-3/4 justify-center text-2xl pb-10">
        <button
          className={`${
            motivationIsClicked
              ? utilStyles.underlineButton
              : utilStyles.noBorderButton
          } mr-6`}
          onClick={handleShowMotivation}
        >
          Motivation
        </button>
        <button
          className={`${
            mindfulIsClicked
              ? utilStyles.underlineButton
              : utilStyles.noBorderButton
          } mr-6`}
          onClick={handleShowMindful}
        >
          Mindful Practice
        </button>
        <button
          className={`${
            consistencyIsClicked
              ? utilStyles.underlineButton
              : utilStyles.noBorderButton
          } mr-6`}
          onClick={handleShowConsistency}
        >
          Consistency
        </button>
      </div>

      <Motivation showMotivation={showMotivation} />
      <Mindful showMindful={showMindful} />
      <Consistency showConsistency={showConsistency} />
    </>
  );
};

export default ToggleSolutions;
