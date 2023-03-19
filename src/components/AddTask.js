import { useState } from "react"


const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert("texteee oruul nuu");
            return;
        }
        onAdd(text);
        setText("");
    }
  return (
    <form onSubmit={onSubmit} className="add-form">
        <div className="form-control">
            <label className=""></label>
            <input value={text} type="text" onChange={(e)=> setText(e.target.value)}  placeholder="write here"/>
        </div>
        <input type="submit" className="btn-block"/>
    </form>
  )
}

export default AddTask