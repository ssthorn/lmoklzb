import { useState, useEffect } from "react";
import SinglePostComponent from "./singlePostComponent/SinglePostComponent";

const PostsContainer = () => {
    const [posts, setPosts] = useState ([])
    const getPosts = async () => {
        console.log("Load Posts")
        const getPostsApiResponse = await fetch("http://localhost:8000/api/posts")
        const parsedPosts = await getPostsApiResponse.json();
        // console.log(parsedPosts)
        setPosts(parsedPosts)
    }
    return (
        <div>
            <h2>Posts Container</h2>
            <button onClick={getPosts}>Get Posts</button>
            
            {posts.map((post)=>{
                return <SinglePostComponent post={post} key={`post- ${post.id}`}>{JSON.stringify(post)}</SinglePostComponent>
            })}
        </div>
    )
}

export default PostsContainer;