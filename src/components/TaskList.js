import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  const handleCompleteTask = (index) => {
    setTasks(
      tasks.map((task) =>
        task.id === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task) => task.id !== index));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          completed={task.completed}
          index={task.id}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
