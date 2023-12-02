import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import React from 'react'

const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '♥',
    rocket: '🚀',
    coffee : '☕'
}



const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()

    const handleReaction = (name)=> {
        dispatch(reactionAdded({postId: post.id, reaction: name}))
    }

    const reactionBts = Object.entries(reactionEmojis).map(([name, emoji])=> {
        return (
            <button key={name} type="button" onClick={()=>handleReaction(name)}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })

  return (
    <div>{reactionBts}</div>
  )
}

export default ReactionButtons