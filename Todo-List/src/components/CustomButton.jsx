import React, { useState } from 'react'
import { easeInOut, motion } from "motion/react"


const CustomButton = ({ handleAdd, buttonName }) => {

  const [hover, setHover] = useState();

  return (
    <>
      <div onMouseEnter={() => setHover(true)} onClick={handleAdd} onMouseLeave={() => setHover(false)} className='mt-5 relative rounded-2xl  overflow-hidden'> 
        <button  className={`rounded-2xl relative overflow-hidden bg-black ${hover ? 'text-white' : 'text-white' } w-24 h-14`}> 
        <h1 className=' ' >

          {buttonName} 
        </h1>

        
          </button> 
          <motion.div  animate={hover ? { y: "-76%", scale: 1.2 } : { y: 0 }} transition={{ ease: easeInOut, delay: 0.01 }} className='w-24 h-24 absolute rounded-full mix-blend-difference customButton z-10 bg-purple-300'> 
            </motion.div> 
            </div>
    </>
  )
}

export default CustomButton
