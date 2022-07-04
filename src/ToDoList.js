import React from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);

  //when state receives a new value add it to array
  const addValueToList = (enteredValue) => {
    list.push(enteredValue);
    console.log(list);
  };

  return (
    <div>
      <NewTask saveToArray={addValueToList} />
      <TasksList toDoItem={list} />
    </div>
  );
}

export default ToDoList;
