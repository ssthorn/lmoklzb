import { useState, useEffect } from "react";
import SinglePostComponent from "./singlePostComponent/SinglePostComponent";

const PostsContainer = () => {
    // const [requestError, setRequestError] =useState("")
    const [posts, setPosts] = useState ([])
    
    const getPosts = async () => {
        const getPostsApiResponse = await fetch("http://localhost:8000/api/posts")
        // const getPostsApiResponse = await fetch("https://immense-lake-74773.herokuapp.com/api/posts")
        const parsedPosts = await getPostsApiResponse.json();
        setPosts(parsedPosts)
        
    }

    // if(!posts || posts.length === 0) return <p>There are no posts.</p>
    return (
        <div>
            <h2>Posts Container</h2>
            {/* <button onClick={getPosts}>Get Posts</button>
            <button >Create Post</button> */}
            
            {posts.map((post)=>{
                return <SinglePostComponent post={post} key={`post- ${post.id}`}>{JSON.stringify(post)}</SinglePostComponent>
            })}
        </div>

    )
}

export default PostsContainer;