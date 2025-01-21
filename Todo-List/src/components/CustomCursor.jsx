import { easing } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = ({x , y, Leave}) => {
    // const ref = useRef();
    const [t, setT] = useState(0);
    const [l, setL] = useState(0);
    const [o, setO] = useState(0);
    useEffect(()=>{
        
          setT(y); 
          setL(x); 
          Leave ? setO(1) : setO(0); 
          console.log(Leave);
          
    }, [x,y, Leave, o])

  return (
    <div  className={`w-16 h-16  items-center justify-center flex  z-50 translate-x-[-50%] shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] shadow-white translate-y-[-50%] bg-[#36274a8c] absolute rounded-full `} style={{top: `${t}px`, left: `${l}px` , pointerEvents: 'none' }}  >
      <div className='w-1 h-1 rounded-full bg-white' >

      </div>
    </div>
  )
}

export default CustomCursor
