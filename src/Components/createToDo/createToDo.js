import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import "./createToDo.css";

const CreateToDo = ({ modal, toggle, saveList }) => {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setCategory(value);
    }
  };

  const genColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskList = {};
    taskList["id"] = uuidv4();
    taskList["Name"] = taskName;
    taskList["Category"] = category;
    taskList["Color"] = genColor();
    saveList(taskList);
    setTaskName("");
    setCategory("");
  };

  const handleClose = () => {
    toggle();
    setTaskName("");
    setCategory("");
  };

  return (
    <Dialog open={modal} onClose={handleClose} maxWidth="xs" fullWidth={true}>
      <DialogTitle disableTypography id="create-heading">
        Create New Task
      </DialogTitle>
      <DialogContent>
        <DialogContentText>What do you wanna do next?</DialogContentText>
        <input
          className="text-field"
          name="taskName"
          value={taskName}
          onChange={handleChange}
          placeholder="Title"
          autoFocus={true}
        />
        <input
          className="text-field"
          name="category"
          value={category}
          onChange={handleChange}
          placeholder="Description"
        />
        <button className="task-submit hvr-bounce-in" onClick={handleSave}>
          Let's get it!
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateToDo;
