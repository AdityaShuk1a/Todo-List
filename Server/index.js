const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db'); // Import the database connection
const taskModel = require('./models/task'); // Import the Task model

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.post('/createTask',  (req,res)=>{
    const task = req.body.task
    taskModel.create({task: task}).then(()=>{
        res.send('task created')
    })
})

app.get('/getTask', async (req,res)=>{
    
    const tasks = await taskModel.find()
    if(!tasks){
      res.send({"status" : "400"})
    }else{

      res.send(tasks);
    }
})


// Connect to the database and start the server
const startServer = async () => {
  try {
    await dbConnect(); // Await database connection
    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
};

startServer();
