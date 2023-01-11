import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from './layout.module.css'
import Nav from '../components/nav'
import {useState} from 'react'


const name = 'Yun Ji'
export const siteTitle = 'Learn English With Yun'


export default function Layout({ children, home }) {

   const [darkMode, setDarkMode]=useState(false)
   console.log('darkmode should change',darkMode)
   const handleDarkModeChange=(darkMode)=>{
    console.log('darkmode button is clicked')
    setDarkMode(darkMode=>!darkMode)

   }

    return (

        <div className={`${styles.container} ${darkMode? 'dark':''}`} >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
           
            <header className='relative z-50 w-full flex-none bg-white dark:bg-black'>
            <Nav darkMode={darkMode} handleDarkModeChange={handleDarkModeChange}/>
                {home ? (
                    <>
                    
                        <Image
                            priority
                            src='/images/profile.JPG'
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="yun" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src='/images/profile.JPG'
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt="yun"
                            />
                        </Link>
                        <h2 className={utilStyles.borderCircle}>

                            <Link href='/' className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/"> 👈🏻 Back to Home</Link>

                </div>

            )}

        </div>

    )
}