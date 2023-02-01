import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import NotEnough from "../components/notEnough";
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

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="dark:bg-slate-900  dark:text-slate-50">
        <div className="md:mx-5 mx-3">
          <Intro />
          <Stuck />
          <div className="flex justify-center pt-10 md:py-24">
            <Heartbeat />
          </div>
          <NotEnough />

          <div className={` mx-auto p-8 pt-20 text-center`}>
            <p className={`${utilStyles.heading2Xl} dark:text-slate-50`}>
              Change your mindset
            </p>
            <p className={`${utilStyles.heading2Xl} text-purple-600`}>
              you can start learning now
            </p>
          </div>
          <div className="w-9/12 m-auto">
            <ToggleSolutions />
          </div>

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

          <MeetCoach />

          <Testimony />

          <Join />
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
