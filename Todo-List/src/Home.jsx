import React, { useState, useEffect } from 'react';
import GetTask from './components/GetTask';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([])
    
    
    useEffect(() => {
      const fetchTasks = async () => {
          try {
              const response = await axios.get("http://localhost:5000/getTask");
              if (response.data) {
                console.log(response.data);
                setTasks(response.data);
              }
          } catch (error) {
              console.error("Error fetching tasks", error);
          }
      };

      fetchTasks();
  }, []);


    const handleAdd = async () => {
      await axios.post("http://localhost:5000/createTask",{task : task} ).then(()=>{
        window.location.reload()
      }).catch((err)=>{
        console.error(err)
      })
    }


    
    

  return (
    <>
    <div className='flex justify-center items-center w-screen h-full bg-[#29222a]' >

      <div className='  flex h-[700px] overflow-hidden rounded-2xl w-[1200px] bg-[#221c24]' >
        <div className= ' w-[700px] h-full  bg-[#3b313d] relative' >
            <h1 className='text-9xl ml-5  text-[#e6d7e9] font-semibold mt-9  tracking-tight  ' >To-Dos</h1>
            <div className='absolute top-[50%] h-[200px] w-full  flex flex-col  items-center justify-center' > 
            <div className='border border-black rounded-xl overflow-hidden' >

            <input type="text" placeholder='Todo'  className='  p-2  h-14  w-72'  onChange={(e)=>{setTask(e.target.value)}} />
            </div>
          <button onClick={handleAdd} className=' rounded-2xl  bg-black mt-5 text-[#dbc3e0] w-24  h-14 ' >Add</button>
            </div>
            
        </div>
        <div className='w-full  relative   justify-center' >
          <div className=' w-full  '  >
          <h1 className='text-8xl ml-11   text-[#dbc3e0] font-semibold mt-9  tracking-tight  ' >Tasks</h1>
          </div>
          <div className='w-[90%] rounded-3xl flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] items-center justify-center bg-[#29222a] h-[65%]'  >
              <div className='w-[90%] h-[90%]   p-9 overflow-x-auto justify-center' >
              {tasks.map((data, index) => ( 
                <GetTask key={index} data={data} /> 
                ))}
              </div>
          </div>
        </div>
          
      </div>
    </div>
    </>
  )
}

export default Home
