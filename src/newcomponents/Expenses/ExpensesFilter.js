import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter=(props)=>{
        
        const FilterChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
        };
        
return(
 <div>
 <div className="expenses-filter">
    <label ><h2>Filter by Year</h2></label>
    <select  className="expenses-select" value={props.selected} onChange={FilterChangeHandler} >
    <option className="year-nineteen">2019</option>
    <option className="year-twenty">2020</option>
    <option className="year-twentyone">2021</option>
    <option className="year-twentytwo">2022</option>
    </select>
 </div>
 </div>
);
};
export default ExpensesFilter;