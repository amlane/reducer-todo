import React, { useState } from "react";


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
            setInput("")
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