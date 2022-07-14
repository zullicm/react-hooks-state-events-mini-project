import React from "react";

function CategoryFilter({categories, categoryClick, catPick}) {
  

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        if(catPick === category){
          return(<button key={category} value={category} onClick={(e) => categoryClick(e)} className="selected">{category}</button>)
        }else{return(
          <button key={category} value={category}onClick={(e) => categoryClick(e)}>{category}</button>
        )}
      }
    )}
    </div>
  );
}

export default CategoryFilter;


