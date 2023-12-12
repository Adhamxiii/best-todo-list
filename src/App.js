import React, { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        text: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  return (
    <div>
      <Header />
      <Form input={input} setInput={setInput} addTaskHandler={addTaskHandler} />
      <div className="tasks-container">
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default App;
