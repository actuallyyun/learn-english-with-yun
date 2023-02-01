import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./layout.module.css";
import Nav from "../components/nav";
import { useState } from "react";

const name = "Yun Ji";
export const siteTitle = "Learn English With Yun";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = (darkMode) => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div
      className={`${styles.container} ${darkMode ? "dark" : ""} dark:bg-black`}
    >
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="relative z-50 w-full flex-none bg-white dark:bg-slate-800">
        <Nav darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
      </header>
      <div className="dark:bg-slate-900  dark:text-slate-50">{children}</div>
    </div>
  );
}
