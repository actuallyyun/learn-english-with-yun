import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import bubbleStyles from "../styles/bubble.module.css";
import { useState, useEffect } from "react";
import Arrow from "../components/arrow";
import Stars from "../components/stars";
import ScrollAreaHeartBeat from "../components/scrollHeartBeat";
import proseStyles from "../styles/prose.module.css";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import ToggleSolutions from "../components/toggleSolutions";
import Quote from "../components/quote";
import NewMethods from "../components/newMethods";
import GeeMehthods from "../components/geeMethods";
import Testimony from "../components/testimony";
import MeetCoach from "../components/meetCoach";
import Join from "../components/join";
import Footer from "../components/footer";
import Intro from "../components/intro";
import Stuck from "../components/stuck";
import Heartbeat from "../components/heartBeat";
import TakeOff from "../components/takeOff";

const Bubbles = (props) => {
  return (
    <div
      className={`${bubbleStyles.bubblesWrap} ${
        props.hideBubbles ? "hidden" : ""
      }`}
    >
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x1}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x2}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x3}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x4}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x5}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x6}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x7}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x8}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x9}`}></div>
      <div className={`${bubbleStyles.bubble} ${bubbleStyles.x10}`}></div>
    </div>
  );
};

export default function Home({ allPostsData }) {
  const [hideBubbles, setHideBubbles] = useState(true);

  const listenToScroll = () => {
    setHideBubbles(false);
    const heightToHideFrom = 800;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      setHideBubbles(true);
    } else {
      setHideBubbles(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const showMotivation = (event) => {
    console.log(event);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="md:mx-5 mx-3">
        <Intro />
        <Bubbles hideBubbles={hideBubbles} />
        <Stuck />
        <div className="flex justify-center pt-10">
          <Heartbeat />
        </div>
        <ScrollAreaHeartBeat />

        <div className={` mx-auto p-8 pt-20 text-center`}>
          <p className={`${utilStyles.heading2Xl}`}>Change your mindset </p>
          <p className={`${utilStyles.heading2Xl} text-purple-600`}>
            you can start learning now
          </p>
        </div>
        <div className="w-9/12 m-auto">
          <ToggleSolutions />
        </div>

        {/*GGE Section */}
        <div className={`max-w-2xl md:max-w-4xl mx-auto pt-20 text-center`}>
          <p className={`${utilStyles.heading2Xl}`}>
            Insanity is doing the same thing over and over and expecting
            different results.
          </p>
          <Quote
            imageUrl={
              "https://upload.wikimedia.org/wikipedia/commons/4/4c/Albert_Einstein.svg"
            }
            author={"Albert Einstein"}
          />
          <NewMethods />
        </div>
        <div>
          <GeeMehthods />
        </div>

        <TakeOff />

        {/*AboutMe Section */}
        <MeetCoach />
        {/* Testimony Section*/}
        <Testimony />

        {/*Join Section */}
        <Join />
      </div>
      {/*Footer Section */}
      <Footer />
    </Layout>
  );
}
