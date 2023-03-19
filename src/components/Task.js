import {FaTimes} from "react-icons/fa"
import React from 'react'
import "../App.css"

const Task = ({task,onDelete}) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes className="newe" onClick={()=>onDelete(task.id)}/>
      </h3>
    </div>
  )
}

export default Task