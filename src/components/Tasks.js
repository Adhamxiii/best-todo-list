import React from "react";

import TaskList from "./TaskList";
import img from "../Clipboard.png";

function Tasks({ tasks, setTasks }) {
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div className="tasks">
      <div className="info">
        <div className="created">
          <p>
            created tasks <span>{tasks.length}</span>
          </p>
        </div>
        <div className="completed">
          <p>
            completed{" "}
            <span>
              {completedTasks.length} of {tasks.length}
            </span>
          </p>
        </div>
      </div>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} setTasks={setTasks} />
      ) : (
        <div className="list">
          <div className="empty">
            <img src={img} alt="" />
            <p>
              You don't have tasks registered yet{" "}
              <span>Create tasks and organize your to-do items</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
