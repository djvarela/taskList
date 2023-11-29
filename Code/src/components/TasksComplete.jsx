import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export const TasksComplete = ({element}) => {

const {handleDeleteTask} = useContext(TaskContext);

  return (
    <li key={element.id}>
    <div className="item">
     
      <p
        className={element.done ? "taskOk" : null}
        id={element.id}
        
      >
        {element.task}
      </p>

      <div className="actions">
          <button
            onClick={() => {
              handleDeleteTask(element);
            }}
          >
            <img src="/public/trash.svg" width={"25px"} alt="icon trash" />
          </button>
        </div>
    </div>
  </li>
  )
}
