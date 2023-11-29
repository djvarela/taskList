import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {

const {tarea,setTarea} = useContext(TaskContext)

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();

    const item = {
      task: e.target[0].value,
      id: date.toLocaleTimeString().toString(),
      done: false,
      complete: false
    };

    if (e.target[0].value != "") setTarea([...tarea, item]);
    e.target[0].value = "";

    
  }


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    
       <span>    
        <input type="text" id="task" name="task" placeholder="Agregue tarea" />
        <button>+</button>
       </span>
    </form>
  );
};
