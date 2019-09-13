export const initialState = {
    tasks: [{
        item: "Learn about reducers",
        completed: false,
        id: 1
    }, {
        item: "Learn about redux",
        completed: false,
        id: 1
    }, {
        item: "Learn about async redux",
        completed: false,
        id: 1
    }]
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            console.log(action)
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}