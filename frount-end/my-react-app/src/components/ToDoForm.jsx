import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions/index";

const  ToDoForm =() =>{
    const [text, setText] = useState("")

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
       e.preventDefault();

       dispatch(addNewTodo(text));
    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value)
    }
  return (
    <>
    <form className='form' onSubmit={onFormSubmit}>
        <input 
        placeholder='Enter your new a task ...'
        className='input'
        onChange={onInputChange}
        />
    </form>
    </>
  )
}

export default ToDoForm
