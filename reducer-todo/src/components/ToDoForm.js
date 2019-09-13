import React, { useState, useReducer } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer"

const ToDoForm = ({ dispatch }) => {
    const [input, setInput] = useState("");

    const handleInput = e => {
        setInput(e.target.value)
    }
    console.log("renders")
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const newTask = { item: input, completed: false, id: Date.now() }
            dispatch({ type: "ADD_TASK", payload: newTask })
        }}>
            <input
                name="input"
                value={input}
                onChange={handleInput}
            />
            <button>+</button>
        </form>
    )
}

export default ToDoForm;