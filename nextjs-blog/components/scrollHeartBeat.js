
import proseStyles from '../styles/prose.module.css'
import {Typewriter} from 'react-simple-typewriter'
import utilStyles from '../styles/utils.module.css'
import React from 'react'
import {useInView} from 'react-intersection-observer'

const ScrollWrapper=({children})=>{
  return (
    <div className="flex">
      {children}
    </div>
  )
}


const ScrollAreaHeartBeat=()=>{

  const {ref,inView}=useInView({
    threshold:0
  })

    return (
        <ScrollWrapper>
        <div ref={ref} className={`${proseStyles.prose} mx-auto p-8 text-xl pt-20 ${inView? utilStyles.show:""} ${utilStyles.hidden}`} id='#scrollArea'>
          <p>We thought we have to memorize more vocabulary, to correct our pronunciations, to 
            eliminate all the grammatical errors. </p>
          <p className="pt-8 pb-8 text-red-500 text-center">
            <Typewriter 
              words={['my English is bad',"i'm not good at English","i will never be able to learn it","my pronunciation is terrible"]}
              loop={5}
                cursor
                cursorStyle='.'
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
          </p>
          <p>Stories we tell ourselves.</p>
          <p className={`${utilStyles.headingXl}`}>You <span className='text-red-500 animate-pulse'>WON'T</span> learn if you don't believe you can learn</p>
        </div>
        </ScrollWrapper>
    )
}

export default ScrollAreaHeartBeat