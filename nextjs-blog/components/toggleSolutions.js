import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Motivation=({showMotivation})=>{

    return (

        <div className={`${showMotivation?'':'hidden'} grid md:grid-cols-2 gap-7`}>
         <div >
           <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl} `}> So that's it? I just have to change to a different mindset? </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className=''>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
            className={'mt-4'}
            />  
        </div>
        </div>
    )
}
const Mindful=({showMindful})=>{

    return (

        <div className={`${showMindful?'':'hidden'} grid md:grid-cols-2 gap-7`}>
         <div >
           <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl}`}> Learning a languge needs A LOT OF practice.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className='flex justify-end grow-0'>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
            className={'mt-4'}
            />  
        </div>
        </div>
    )
}
const Consistency=({showConsistency})=>{

    return (

        <div className={`${showConsistency?'':'hidden'} grid md:grid-cols-2 gap-7`}>
         <div >
           <p className={`md:${utilStyles.heading2Xl} ${utilStyles.headingXl}`}>Getting better at anything takes a long time</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className='flex justify-end grow-0'>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
            className={'mt-4'}
            />  
        </div>
        </div>
    )
}


const ToggleSolutions=()=>{
    const [showMotivation,setShowMotivtion]=useState(true)
    const [showMindful,setShowMindful]=useState(false)
    const [showConsistency,setShowConsistency]=useState(false)

    const handleShowMotivation=(event)=>{
        setShowMotivtion(true)
        setShowMindful(false)
        setShowConsistency(false)    
        
      }
    
    const handleShowMindful=(event)=>{
        setShowMindful(true)
        setShowMotivtion(false)
        setShowConsistency(false)
    }

    const handleShowConsistency=()=>{
        setShowConsistency(true)
        setShowMindful(false)
        setShowMotivtion(false)
    }


    return (
        <>
         <div className='flex flex-row m-auto w-3/4 justify-center text-2xl pb-10'>
            <button className={`${utilStyles.underlineButton} mr-6`} onClick={handleShowMotivation}>Motivation</button>
            <button className={`${utilStyles.underlineButton} mr-6`} onClick={handleShowMindful}>Mindful Practice</button>
            <button className={`${utilStyles.underlineButton} mr-6`}  onClick={handleShowConsistency}>Consistency</button>
          </div>
      
       
       <Motivation showMotivation={showMotivation}/>
       <Mindful showMindful={showMindful}/>
       <Consistency showConsistency={showConsistency}/>

        </>
    )
}

export default ToggleSolutions