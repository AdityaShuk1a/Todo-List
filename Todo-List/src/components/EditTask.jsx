import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

const EditTask = ({data, handleUpdate, handleClose}) => {
    const [updatedTask, setUpdatedTask] = useState("")
    useEffect(()=>{
        // console.log(data.)
        setUpdatedTask(data.task)
    }, [])
  return (
    <>
    <div className='  h-full flex items-center' >
      <input className='h-[7vh] w-[90%] text-black ' type="text"  value={updatedTask} onChange={(e)=>{
        data.task = e.target.value
        setUpdatedTask(e.target.value)
        }} />
      <div  onClick={ () => {
                console.log("clicked")
                handleUpdate(data._id, updatedTask)
                handleClose()
              }
            } className="  ml-5">
              
              <EditIcon style={{fontSize : "24px", color : "black", backgroundColor : "white", marginBottom : "1.6px"}}  />
              </div>
    </div>
    </>
  )
}

export default EditTask
