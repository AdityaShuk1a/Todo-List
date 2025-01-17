import React from 'react'
const GetTask = ({data}) => {
    

  return (
    <div className='w-[90%] rounded-lg h-15 mt-4 bg-zinc-700 p-5 text-white text-2xl' >
        {data.task}
    </div>
  )
}

export default GetTask
