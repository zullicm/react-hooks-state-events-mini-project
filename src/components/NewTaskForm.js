import React,{ useState } from "react";



function NewTaskForm({categories, onTaskFormSubmit}) {
  const [itemFormCat, setItemFormCat] = useState("Code")
  const [details, setDetails] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    
    const newTaskObj = {
      text: details, 
      category: itemFormCat
    }
    onTaskFormSubmit(newTaskObj)
    setDetails("")
    setItemFormCat("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setItemFormCat(e.target.value)}>
          {categories.map(category => {
            if(category === "All") return false
            return (<option key={category}>{category}</option>)
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
