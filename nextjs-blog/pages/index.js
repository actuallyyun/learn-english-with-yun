import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import bubbleStyles from '../styles/bubble.module.css'
import {useState, useEffect} from 'react'
import Arrow from '../components/arrow'
import Stars from '../components/stars'
import proseStyles from '../styles/prose.module.css'
import {Typewriter} from 'react-simple-typewriter'


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
          {/* Background image+ bubble*/}
          <div className={`absolute top-0 bg-no-repeat bg-cover w-full lg:bg-fixed bg-scroll z-0  ${utilStyles.backGroundImage} bg-background` }>
            <Bubbles hideBubbles={hideBubbles}/>
          </div>
          {/* Intro section content*/}
          <div className={`relative flex flex-col items-center justify-center text-center pt-8 ${utilStyles.introSectionHeight}`}>
            <div className="h-full sm:pt-20 pt-10 flex flex-col items-center justify-center">
              {/* Intro title and starts*/}
              <div>
                <div className='inline-flex'>
                    <Stars/>
                </div>
                <div className={`block ${utilStyles.introTextHeight}`}>
                  <h1 className={`font-semibold text-2xl text-white pt-8 px-5 md:max-w-3xl lg:text-4xl sm:pt-0 ${utilStyles.heading2Xl}`}>
                  Your English is Great. <br></br>Use English With Confidence <br></br>Right Now
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
      <div className={`${proseStyles.prose} mx-auto p-8 text-xl`}>
        <p>We have all been there.</p>
        <p>We feel our English is not good enough. We could not find the right word. We just made a grammar mistake. We used the wrong vocabulary. We worried about not making any sense.</p>
        <p>We became self-conscious. Our cheeks began to flush, and we started panicking.</p>
        <p className="pt-4 pb-6 text-red-500">
          <Typewriter
              words={['wrong','embarrsing','what am i doing here??',"i can't talk...",'..','...']}
              loop={5}
              cursor
              cursorStyle='.'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              
            />
          </p>
        <p className='text-2xl animate-bounce pb-3'>We were stuck 😢</p>



        <p>We thought we have to memorize more vocabulary, to correct our pronunciations, to 
          eliminate all the grammatical errors. </p>

        
        <p className="pt-4 pb-6 text-red-500">
          <Typewriter 
            words={['my English is bad',"i'm not good at English"]}
            loop={2}
              cursor
              cursorStyle='.'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </p>
        <p>Stories we tell ourselves.</p>
        
        <p className={`${utilStyles.headingXl}`}>You <span className='text-red-500 animate-pulse'>WON'T</span> learn if you don't believe you can learn</p>

        <p> So that's it? I just have to change to a different mindset? </p>
        <p>I wish it was that easy. The hard truth is that learning a language, any languge, is hard. Learning is hard and painful, and it is supposed to. 
          That's also why we love it.</p>
        <p>But for learning to happen, first you need to have the right mindset.</p>

        <p className='text-2xl animate-bounce pb-3 pt-3'>ok,then what? 🧐</p>

        <p > <span className='bg-red-200 text-2xl p-3'>Motivation</span></p>

        <p>Find what motivates you and leverage it for your learning. </p>
        <p>
          <Typewriter 
              words={['I enjoy watching English series.']}
              loop={2}
                cursor
                cursorStyle='.'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          <p>
              <Typewriter 
            words={['I am interested in listening to NPR political podcasts.']}
            loop={2}
              cursor
              cursorStyle='.'
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p>
              <Typewriter 
            words={['I want to learn how to write in English and tell my stories.']}
            loop={2}
              cursor
              cursorStyle='.'
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          
          <p className='pt-3'> <span className='bg-red-200 text-2xl p-3'>Mindful Practice</span></p>
          <p>Learning a languge needs <span className='text-red-400'>A LOT OF </span>practie.</p>
          <p>However, not all practice is created equal. To optimize learning, we need to be alert, focused, and aware of what we are learning. </p>
          <p>What does this mean? Have your tried to learn English by watching TV series but never felt that you have made progress? Well your learning pratice is perhaps not mindful enough.</p>

          <p className='pt-3'> <span className='bg-red-200 text-2xl p-3'>Consistency</span></p>

          <p>Never mind the 10,000 hours law. Getting better at anything takes a long time, let alone a complex skill such as acquiring a new language.</p>

          <p>Learning English needs to be a part of your life.</p>
          <p>You are not going to get noticeablely better next week, even the next month. But if you learn consistently, you will see progress. </p>


          <p className='pt-3'> <span className='text-3xl'>There has to be a better way</span></p>
          <p>Time to try something new. </p>
          <p>To quote Einstein, <span className='italic bg-green-400'>Insanity is doing the same thing over and over and expecting different results.</span></p>
          <p>If what you have tried has not worked, you might want to try a different method.So often when we feel that we can't learn, the problem lies in the method.</p>
          <p>Maybe it is not the right one for you.</p>
          <p>I understand that it could be overwhelming trying to find solution on your own. <span className='font-bold'>And you don't have time for another failed attempt.</span> </p>
          <p>You want to get it right.</p>
          <p className='pt-3'> <span className='bg-green-400 text-2xl p-3'>GOOD ENGOUGH ENGLISH</span></p>
          <p>✅ We use evidence-based scientific learning methods </p>
          <p>✅ We tailor to each student's motivation, interests, and learning needs</p>
          <p>✅ We promote safe enviroment for you to start using English right now</p>
          <p>✅ We help you to estabilish your own learning routine</p>

          <p className={`${utilStyles.headingXl}`}>🤔Is this course right for me?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus repellat provident voluptates dolore in explicabo, doloribus eius ducimus nobis nostrum modi maiores aliquid delectus assumenda sit veniam quis dicta odit!</p>

          <p className={`${utilStyles.headingXl}`}>How should I start?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam modi repudiandae quae ea quam, similique debitis aliquid asperiores dolorem sed nisi accusantium tenetur impedit eligendi temporibus, assumenda maiores perspiciatis?</p>






      
      
      </div>
      {/* Testimony Section*/}
      

      <div className={`grid md:grid-cols-2 md:py-10 py-5 grid-cols-1 gap-4 ${proseStyles.testimony} m-auto`}>
      <p className={`${utilStyles.headingXl}`}>💜 from my students</p>
        <div className='flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg '>
          <section> 
            <p className='text-md leading-normal'>I was just about to start preparing the app we're working on for general availability, which includes solving a lot of performance issues. This workshop delivers knowledge that is applicable to the real world issues right away."</p>
          </section>
          <footer className='text-gray-600 text-xs leading-normal font-mono pt-2'>
            <div className='flex items-center'>
              <div className='flex-grow w-10 overflow-hidden rounded-full relative mr-3'>
                <img src="/images/404.jpeg/" alt="" />
              </div>
              <div className='w-full'>
               <span> Ruslan Shtyk about React Performance workshop</span>
                </div>
            </div>
          </footer>
          <div className='absolute top-4 left-4 font-serif text-4xl text-gray-300 leading-none'>“</div>
        </div>
        <div className='flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg '>
          <section> 
            <p className='text-md leading-normal'>I was just about to start preparing the app we're working on for general availability, which includes solving a lot of performance issues. This workshop delivers knowledge that is applicable to the real world issues right away."</p>
          </section>
          <footer className='text-gray-600 text-xs leading-normal font-mono pt-2'>
            <div className='flex items-center'>
              <div className='flex-grow w-10 overflow-hidden rounded-full relative mr-3'>
                <img src="/images/404.jpeg/" alt="" />
              </div>
              <div className='w-full'>
               <span> Ruslan Shtyk about React Performance workshop</span>
                </div>
            </div>
          </footer>
          <div className='absolute top-4 left-4 font-serif text-4xl text-gray-300 leading-none'>“</div>
        </div>
        <div className='flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg '>
          <section> 
            <p className='text-md leading-normal'>I was just about to start preparing the app we're working on for general availability, which includes solving a lot of performance issues. This workshop delivers knowledge that is applicable to the real world issues right away."</p>
          </section>
          <footer className='text-gray-600 text-xs leading-normal font-mono pt-2'>
            <div className='flex items-center'>
              <div className='flex-grow w-10 overflow-hidden rounded-full relative mr-3'>
                <img src="/images/404.jpeg/" alt="" />
              </div>
              <div className='w-full'>
               <span> Ruslan Shtyk about React Performance workshop</span>
                </div>
            </div>
          </footer>
          <div className='absolute top-4 left-4 font-serif text-4xl text-gray-300 leading-none'>“</div>
        </div>
        <div className='flex flex-col justify-between h-full relative md:px-8 md:pb-8 pt-4 rounded-lg '>
          <section> 
            <p className='text-md leading-normal'>I was just about to start preparing the app we're working on for general availability, which includes solving a lot of performance issues. This workshop delivers knowledge that is applicable to the real world issues right away."</p>
          </section>
          <footer className='text-gray-600 text-xs leading-normal font-mono pt-2'>
            <div className='flex items-center'>
              <div className='flex-grow w-10 overflow-hidden rounded-full relative mr-3'>
                <img src="/images/404.jpeg/" alt="" />
              </div>
              <div className='w-full'>
               <span> Ruslan Shtyk about React Performance workshop</span>
                </div>
            </div>
          </footer>
          <div className='absolute top-4 left-4 font-serif text-4xl text-gray-300 leading-none'>“</div>
        </div>
      

      </div>


    </Layout>
  )
}