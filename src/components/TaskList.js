import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task key={task.text} task={task} onDeleteTask={onDeleteTask} />
  ));
  return <div>{taskList}</div>;
}

export default TaskList;
