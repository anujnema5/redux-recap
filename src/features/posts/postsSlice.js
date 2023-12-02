import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
    {
        id: '2', 
        date: sub(new Date(), {minutes: 10}).toISOString(),
        title : 'Slices ...', 
        userId : '1',
        content: "The more I say slice the more I get hungrier",
        reactions : {
            thumbsUp: 0,
            wow : 0,
            heart: 0, 
            rocket: 0, 
            coffee: 0
        }
    },
    {
        id: '1', 
        date: sub(new Date(), {minutes: 5}).toISOString(), 
        title : 'Learning Redux Toolkit', 
        content: "lorem lorem lorem",
        reactions : {
            thumbsUp: 0,
            wow : 0,
            heart: 0, 
            rocket: 0, 
            coffee: 0
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {

        postsAdded : {
            reducer(state, action) {
                state.unshift(action.payload)
            },

            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions : {
                            thumbsUp: 0,
                            wow : 0,
                            heart: 0, 
                            rocket: 0, 
                            coffee: 0
                        }
                    }
                }
            }
        },

        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post=> post.id === postId)

            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state)=>state.posts
export default postsSlice.reducer
export const {postsAdded, reactionAdded} = postsSlice.actions