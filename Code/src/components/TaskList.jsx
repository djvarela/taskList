import { useContext} from "react";
import { TaskItem } from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import { TasksComplete } from "./TasksComplete";


export const TaskList = () => {
  
  const { tarea } = useContext(TaskContext)
 
  return (
    <div className="list">
      <p>Listas de Tareas</p>

      <div className="list">
        <ul>
        {tarea.map(element => {
           if(element.done === false){

            return (
            <TaskItem
             key={element.id}
             element={element}
             />
             )
            }
          })
        }
        </ul>
     
      </div>
      <div className="list task-complete">
        <h2>Tareas completada</h2>
      <ul>
       {tarea.map(element=>{
          if(element.done){
         return  (<TasksComplete key={element.id}  element={element}/>)
          }
       })
       
       }
      </ul>
      </div>
    </div>
  );
};
