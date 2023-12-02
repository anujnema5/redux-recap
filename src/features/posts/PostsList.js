import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a,b)=> {
    console.log(b.date.localeCompare(a.date))
    return b.date.localeCompare(a.date)
  })

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <div className="postCredit">
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
        </div>

        <ReactionButtons post={post}/>
    </article>
  ))
  
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList
