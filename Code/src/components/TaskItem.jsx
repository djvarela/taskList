import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskItem = ({ element }) => {
  const { handleTaskComplete, handleDeleteTask } = useContext(TaskContext);

  return (
    <li key={element.id}>
      <div className="item">
        <div className="task">

        <input
          type="checkbox"
          id={element.id}
          onChange={() => {  handleTaskComplete(element) }}
          checked={element.done ? true : null}
          />

        <p className={element.done ? "taskOk" : null} id={element.id}>
          {element.task}
        </p>
          </div>

        <div className="actions">
          <button
            onClick={() => {
              handleDeleteTask(element);
            }}
          >
            <img src="./trash.svg" width={"25px"} alt="icon trash" />
          </button>
        </div>
      </div>
      
    </li>
  );
};
