import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // TaskList
  const [categoryText, setCategoryText] = useState("All")
  // CategoryFilter
  const [catPick, setCatPick] = useState("All")
  // NewTaskForm

    const [tasks, setTasks] = useState (TASKS)



  function onTaskFormSubmit(newTaskObj){
      setTasks([...tasks, newTaskObj])
  }


    function deleteTask(text){
      const newTaskForm = tasks.filter(task =>{
        return task.text !== text
      })
      setTasks(newTaskForm)
    }

  function categoryTextChange(e){
    setCatPick(e.target.value)
    setCategoryText(e.target.value)
    e.target.classList.add("selected")
  }

  const newTaskForm = tasks.filter((task) =>{
    if(categoryText === "All") return true
    return task.category === categoryText
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      categoryClick={categoryTextChange} 
      catPick={catPick}
      />
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      deleteTask={deleteTask}
      tasks={newTaskForm} 
      category={categoryText}
      setTask={setTasks}
      />
    </div>
  );
}

export default App;

