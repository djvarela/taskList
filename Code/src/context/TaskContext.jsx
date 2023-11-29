
import  { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const TaskContext = createContext();
const taskLocal = JSON.parse(localStorage.getItem('task'))

export const TaskContextProvider = ({children}) => {
 

  const [tarea, setTarea] = useState(taskLocal || []);



  
  function handleDeleteTask(element) {
    const deleteTask = tarea.filter((item) => item.id != element.id)

    setTarea(deleteTask);
  }

  function handleTaskComplete({ id }) {
    const updateTask = tarea.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTarea(updateTask);
 
  }
  useEffect(() => {
  
    tarea.forEach(item => {
      
      if (item.done && !item.complete)  {
        toast.success("Tarea completada");
        item.complete=true;
      }
    });
    localStorage.setItem('task',JSON.stringify(tarea))
  }, [tarea]);
  
  return (
      <>
      <TaskContext.Provider value={
        {
          tarea,
          setTarea,
          handleDeleteTask,
          handleTaskComplete
        }
      }  >
        {children}
  
      </TaskContext.Provider>
      
      </>
  )
}

