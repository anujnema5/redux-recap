import { configureStore } from "@reduxjs/toolkit";
import postsReduer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";


export const store = configureStore({
    reducer: {
        posts : postsReduer,
        users: usersReducer
    }
})