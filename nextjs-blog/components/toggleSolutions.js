import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { useState } from 'react'






const Motivation=({showMotivation})=>{

    return (

        <div className={`${showMotivation?'':'hidden'}`}>
         <div >
           <p className={`${utilStyles.heading2Xl} `}> So that's it? I just have to change to a different mindset? </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className='flex justify-end grow-0'>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
            />  
        </div>
        </div>
    )
}
const Mindful=({showMindful})=>{

    return (

        <div className={`${showMindful?'':'hidden'}`}>
         <div >
           <p className={`${utilStyles.heading2Xl} `}> Learning a languge needs A LOT OF practice.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className='flex justify-end grow-0'>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
            />  
        </div>
        </div>
    )
}
const Consistency=({showConsistency})=>{

    return (

        <div className={`${showConsistency?'':'hidden'}`}>
         <div >
           <p className={`${utilStyles.heading2Xl} `}>Getting better at anything takes a long time</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta vero distinctio eligendi. Consequuntur autem excepturi maxime, repudiandae quisquam perferendis quam eveniet ut non voluptatibus labore molestias. Officia, iste molestiae.</p>
        </div>
        <div className='flex justify-end grow-0'>
          <Image 
            src="/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg" 
            alt="picture says love to learn"
            width={500}
            height={350}
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
         <div className='flex flex-row m-auto w-3/4 justify-center text-2xl'>
        <button className='pr-4' onClick={handleShowMotivation}>Motivation</button>
        <button className='pr-4' onClick={handleShowMindful}>Mindful Practice</button>
        <button onClick={handleShowConsistency}>Consistency</button>

      </div>
      <div className='w-9/12 grid grid-cols-2 gap-4 m-auto'>
       
       <Motivation showMotivation={showMotivation}/>
       <Mindful showMindful={showMindful}/>
       <Consistency showConsistency={showConsistency}/>

      </div>
        </>
    )
}

export default ToggleSolutions