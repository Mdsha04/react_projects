import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        title: "hello shaquib",
    }]
}


export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload
            )
            
        },

       
    }


})

export const {addTodos,removeTodo} = TodoSlice.actions

export default TodoSlice.reducer