import React, { useEffect, useState } from 'react'
// import EventBusyIcon from '@mui/icons-material/EventBusy';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import axios from 'axios';
import { easeInOut, motion, easeIn, easeOut, circIn } from "motion/react"
import EditTask from './EditTask';


const GetTask = ({data, deleteTask, handleUpdate}) => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const [editTask, setEditTask] = useState(1);
    const [click, setClick] = useState(0)
    const [flagClick, setFlagClick] = useState(0)
    const handleClose = () => {
      // setFlagClick(0)
      console.log("clicked")
      setClick(0);
    }
    useEffect(()=>{

      handleClose()
    }, [flagClick])
    

  return (
    <motion.div className={`w-[90%] relative  overflow-hidden rounded-lg flex justify-between mt-4 bg-zinc-700 p-5 text-white text-2xl`} onClick={()=>{
      if(click == 1) {
        setFlagClick(flagClick+1)
      }else{

        setClick(1)
      }
    }} onMouseEnter={()=>{setMouseEnter(true)}} onMouseLeave={()=>{setMouseEnter(false)}} whileHover={mouseEnter ?{scale : 1.1} : {scale : 1}}  >
      <motion.div className='w-[90%] text-[#dbc3e0] h-[5vh]' whileHover={mouseEnter ?{height: "fit-content"} : {height : "5vh"}}  >
      {click ? 
        <EditTask handleClose={handleClose}  data={data} handleUpdate={handleUpdate} />
      :
     

              data.task.length > 30  ?  mouseEnter == false ? data.task.substring(0,30) + "..." : data.task : data.task
      
      } 
            </motion.div>
              <div onClick={() => deleteTask(data._id)}  className=" absolute rounded-xl top-[50%]  translate-y-[-50%] right-[5%]">
              
              <DisabledByDefaultIcon style={{fontSize : "30px"}}/>
              </div>

          </motion.div>
      
  )
}

export default GetTask
