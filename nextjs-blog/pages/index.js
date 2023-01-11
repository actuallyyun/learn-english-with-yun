import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import bubbleStyles from '../styles/bubble.module.css'
import {useState, useEffect} from 'react'

const Bubbles=(props)=>{
  return (
    <div className={`${bubbleStyles.bubblesWrap} ${props.hideBubbles?'hidden':''}`}>
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

  )
}

export default function Home({ allPostsData }) {
const [hideBubbles,setHideBubbles]=useState(true)

const listenToScroll=()=>{
  setHideBubbles(false)
  const heightToHideFrom=1000
  const winScroll=document.body.scrollTop || document.documentElement.scrollTop
  if(winScroll>heightToHideFrom){
    setHideBubbles(true)
  }else{
    setHideBubbles(false)
  }
}

useEffect(()=>{
  window.addEventListener("scroll",listenToScroll)
},[])

  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="relative">
        <div className="pb-16">
          <div className={`absolute top-0 bg-no-repeat bg-cover w-full lg:bg-fixed bg-scroll z-0  ${utilStyles.backGroundImage} bg-background` }>
         
          <Bubbles hideBubbles={hideBubbles}/>
          </div>
      <div className={`relative flex flex-col items-center justify-center text-center pt-8 ${utilStyles.introSectionHeight}`}>
        <div className="h-full sm:pt-10 pt-0 flex flex-col items-center justify-center">
          
          <div className="">
          <div className='inline-flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

          </div>
          <div className={`block ${utilStyles.introTextHeight}`}>
            <h1 className={`font-semibold text-2xl text-white pt-8 px-5 md:max-w-3xl lg:text-4xl sm:pt-0 ${utilStyles.heading2Xl}`}>
              
              Your English is Great. <br></br>Use English With Confidence <br></br>Right Now
              
              </h1>
          </div>
       
          </div>
          <div className="flex items-end justify-center w-full h-full">
           
          </div>
        </div>
        
        </div>
      </div>
      </div>

    </Layout>
  )
}