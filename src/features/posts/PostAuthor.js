import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers)
    const author = users.find((user)=> {
      return user.id === userId
    })


  return (
    <div>
        <span>by {author ? author.name : 'Unknown author'}</span>
    </div>
  )
}

export default PostAuthor