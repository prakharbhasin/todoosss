import React, { useEffect, useState } from "react";
import CreateToDo from "./Components/createToDo/createToDo";
import Card from './Components/Card/Card';
import './homePage.css';
import NoTasks from './assets/noTasks.svg'

import DailyMessage from 'daily-message';

function HomePage() {
  const [modal, setModal] = useState(false);
  const tasks = JSON.parse(localStorage.getItem("taskList"))
  const [taskList,setTaskList]=useState(tasks?tasks:[]);
  const numTasks = taskList.length;

  const toggleModal = () => {
    setModal(!modal);
  };

  const saveList = (taskObject) => {
    let tempList = [...taskList,taskObject];
        // tempList.push(taskObject);
        // localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList);
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false);
  }

  const completeTodo = (id) =>{
    // setTaskList(taskList.filter( todo => todo.id !== id));
    let tempList = (taskList.filter( todo => todo.id !== id));
    // tempList.splice(index,1)
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList))
  }

  // const tasks = JSON.parse(localStorage.getItem("taskList"))

  useEffect(()=>{
    
  })



  return (
    <div>
      <div className="nav">
      <h1 className="heading"><span className="task-no">to</span>Doosss</h1>
      <p className="mob-tasks-left">{numTasks}</p>
      </div>
      
      <CreateToDo modal={modal} toggle={toggleModal} saveList={saveList} />
      <div class="container">
          <div class="section one">
              <DailyMessage customClass="task-prog"/>

              <h1 className="task-prog">
                {numTasks===0?"you're all caught up":<>you have <span className="task-no">{numTasks}</span> {numTasks==1?"task":"tasks"} to complete.</>}</h1>
              <button onClick={toggleModal} className="add-button hvr-bounce-in">+</button>
          </div>
          <div className={`section two ${numTasks===0?" img-cont":""}`}>
            {numTasks===0?<div className="img-container"><h1 className="mobile-prog">You're all caught up!</h1><img className="done-img" src={NoTasks}/></div>:
            <>
              {taskList.map((todos, key) => {
              return <Card title={todos.Name} category={todos.Category} id={todos.id} completeTodo={completeTodo} color={todos.Color}/>
              })}
          </>}
          <button onClick={toggleModal} className="add-button hvr-bounce-in" id="mobile-bt">+</button>
          </div>
      </div>
      
      {/* {taskList.map((data)=>
          <h1>{data.Color}</h1>
      )} */}
    </div>
  );
}

export default HomePage;
