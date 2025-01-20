import { easing } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = ({x , y}) => {
    const ref = useRef();
    const [t, setT] = useState(0);
    const [l, setL] = useState(0);
    useEffect(()=>{
        // const xAxis = x - ref.current.left;
        // const yAxis = y - ref.current.left;
        setT(y+35);
        setL(x+35);
    }, [x,y])

  return (
    <div ref={ref} className={`w-24 h-24 z-50 translate-x-[-40%] shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] shadow-white translate-y-[-40%] bg-[#36274a8c] absolute rounded-full `} style={{top: `${t}px`, left: `${l}px` , pointerEvents: 'none'}}  >
      
    </div>
  )
}

export default CustomCursor
