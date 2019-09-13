import React, { useState, useReducer } from "react"
import { taskReducer, initialState } from "../reducers/taskReducer";
import ToDoForm from "./ToDoForm"
import Task from "./Task"

const ToDoList = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState)

    console.log(state)
    console.log("renders in todo list")
    return (
        <div>
            {state.tasks.map(task => {
                return (
                    <Task task={task} />
                )
            })}
            <ToDoForm dispatch={dispatch} />
        </div>
    )
}

export default ToDoList;
