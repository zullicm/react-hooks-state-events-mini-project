import React from "react";

function Task({ task, onDeleteTask }) {
  const { text, category } = task;

  function handleClick() {
    onDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
