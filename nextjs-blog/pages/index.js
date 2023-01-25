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

      <div className="relative">
        <div className="">
          {/* Background image+ bubble*/}
          <div
            className={`dark:brightness-75 absolute top-0 bg-no-repeat bg-cover w-full lg:bg-fixed bg-scroll z-0  ${utilStyles.backGroundImage} bg-background bg-blend-lighten`}
          >
            <Bubbles hideBubbles={hideBubbles} />
          </div>
          {/* Intro section content*/}
          <div
            className={`relative flex flex-col items-center justify-center text-center pt-8 ${utilStyles.introSectionHeight}`}
          >
            <div className="h-full sm:pt-20 pt-10 flex flex-col items-center justify-center">
              {/* Intro title and starts*/}
              <div>
                <div className="inline-flex">
                  <Stars />
                </div>
                <div className={`block ${utilStyles.introTextHeight}`}>
                  <h1
                    className={`font-semibold text-2xl text-white pt-8 px-5 md:max-w-3xl lg:text-4xl sm:pt-0 ${utilStyles.heading2Xl}`}
                  >
                    Your English is Great. <br></br>Use English With Confidence{" "}
                    <br></br>Right Now
                  </h1>
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
      {/* Prose Section*/}
      {/*Underwater Section */}
      <div
        className={`dark:brightness-75 bg-no-repeat bg-cover w-full bg-scroll bg-background ${utilStyles.backGroundImageUnderWater} `}
      >
        <div
          className={`${proseStyles.prose} mx-auto p-8 text-xl flex flex-col justify-end text-gray-600 dark:text-gray-800`}
        >
          <p>We have all been there.</p>
          <p>
            We feel our English is not good enough. We could not find the right
            word. We just made a grammar mistake. We used the wrong vocabulary.
            We worried about not making any sense.
          </p>
          <p>
            We became self-conscious. Our cheeks began to flush, and we started
            panicking.
          </p>
          <p className="pt-10 pb-10 md:pb-20 text-red-500">
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
          <p className="text-2xl animate-pulse pt-16 md:pt-20 text-gray-50">
            We were stuck 😢
          </p>
        </div>
      </div>
      {/*Heartbeat Section */}
      <div className="bg-sky-100 mx-3 md:mx-5 rounded-r-md mt-7">
        <div className="flex flex-row items-center m-auto justify-center pt-20 animate-pulse">
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
        <ScrollAreaHeartBeat />
      </div>
      <div>
        {/*Solution Section */}

        <div className={`${proseStyles.prose} mx-auto p-8 pt-20 text-center`}>
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

        <br></br>

        <br></br>

        <br></br>
      </div>

      {/*AboutMe Section */}
      <MeetCoach />
      {/* Testimony Section*/}
      <Testimony />

      {/*Join Section */}
      <Join />

      {/*Footer Section */}
      <footer className="container text-center pb-10 ">
        <div className="w-24 h-1 my-12 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full mx-auto"></div>
        <div className="flex justify-center items-center">
          <i className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </i>
          Need help? Email{" "}
          <a
            href="mailto:this.jiyun@gmail.com"
            className="pl-1 hover:text-gray-800"
          >
            this.jiyun@gmail.com
          </a>
        </div>
        <div className="flex justify-center items-center my-2">
          <a href="" className="font-bold hover:text-gray-800">
            Terms and Conditions
          </a>
        </div>
      </footer>
    </Layout>
  );
}
