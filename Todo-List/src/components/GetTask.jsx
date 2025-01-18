import React from 'react'
// import EventBusyIcon from '@mui/icons-material/EventBusy';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import axios from 'axios';
const GetTask = ({data}) => {
    const deleteTask = async (taskId) => {
      // const leo = {data}
      // console.log(taskId)
      const taskClr = await axios.delete(`http://localhost:5000/deleteTask/${taskId}`).then(() => {
        window.location.reload()
      }).catch((err) => {
        window.alert(err)
      })
      
    }

  return (
    <div className='w-[90%] relative rounded-lg flex justify-between h-15 mt-4 bg-zinc-700 p-5 text-white text-2xl' >
      <div className='w-[92%] text-[#dbc3e0]' >

        {data.task.length > 50 ? data.task.substring(0,50) + "..." : data.task}
      </div>
        <div onClick={() => deleteTask(data._id)}  className=" absolute rounded-xl top-[50%]  translate-y-[-50%] right-[5%]">

        <DisabledByDefaultIcon style={{fontSize : "30px"}}/>
        </div>

    </div>
  )
}

export default GetTask
