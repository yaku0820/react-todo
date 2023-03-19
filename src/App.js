import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import zurag from "./components/img/23e6029c5285471338418f1556811ce9.jpg"
import './App.css';
import AddTask from "./components/AddTask";

function App() {
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"js lesson 1"
    },
    {
        id:2,
        text:"js lesson 2"
    },
    {
        id:3,
        text:"js lesson 3",
        img:{zurag}
    }
]);
  const deleteTask = (id)=>{
    // console.log("delete",id)
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  const addTask=(task)=>{
    const id= Math.floor(Math.random()*10000)+1;
    console.log(id);
    const newTask={id,text:task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
          <Header/>
          <AddTask onAdd={addTask}/>
          {tasks ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "no task"}
    </div>
  );
}
export default App;
