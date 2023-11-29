import React from "react";
import ReactDOM from "react-dom/client";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { App } from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <TaskContextProvider>

      <App/>

      <ToastContainer />
    </TaskContextProvider>
    
  </React.StrictMode>
);
