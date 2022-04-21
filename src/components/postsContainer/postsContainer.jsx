// import { useState, useEffect } from "react";
// import All from "../all";
// import NewPostComponent from "./newPostComponent/NewPostComponent";
// import SinglePostComponent from "./singlePostComponent/SinglePostComponent";

// const PostsContainer = () => {
//     // const [requestError, setRequestError] =useState("")
//     const [posts, setPosts] = useState ([])
    
//     const getPosts = async () => {
//         const getPostsApiResponse = await fetch("http://localhost:8000/api/posts")
//         // const getPostsApiResponse = await fetch("https://immense-lake-74773.herokuapp.com/api/posts")
//         const parsedPosts = await getPostsApiResponse.json();
//         setPosts(parsedPosts)
        
//     }

//     // if(!posts || posts.length === 0) return <p>There are no posts.</p>
//     return (
//         <div>
//             <h2>Posts Container</h2>
//            <NewPostComponent createNewPost={this.createNewPost} handleNewInputChange={this.handleNewInputChange}  ></NewPostComponent>
//             {/* <button onClick={getPosts}>Get Posts</button>
//             <button >Create Post</button> */}
            
//             {posts.map((post)=>{
//                 return <SinglePostComponent post={post} key={`post- ${post.id}`}>{JSON.stringify(post)}</SinglePostComponent>
//             })}
//         </div>

//     )
// }

// export default PostsContainer;

import React from "react"
import SinglePostComponent from "./singlePostComponent/SinglePostComponent"
import NewPostComponent from "./newPostComponent/NewPostComponent"

class ClassPostContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            newPosts: {
                name: "",
                description: "",
                votesYes:0,
                votesNo:0
            },
            updatePosts:{
                name:"",
                description: "",
                votesYes:0,
                votesNo:0
            }
        }
    }
    handleNewInputChange = (e) => {
        this.setState({
            newPosts: {
                ...this.state.newPosts,
                [e.target.name]: e.target.value
            }
        })

    }
    createNewPost = async (e) => {
        e.preventDefault();
        console.log(this.state.newPosts)
        const apiResponse = await fetch('http://localhost:8000/api/posts/', {
            method: 'POST',
            body: JSON.stringify(this.state.newPosts),
            headers: {
                "Content-Type": 'application/json'
            }

        })
        const createParsedResponse = await apiResponse.json()
        console.log(createParsedResponse)
        this.setState({
            posts: [...this.state.posts, createParsedResponse]
        })
    }
    async getPosts(){
        const apiResponse = await fetch('http://localhost:8000/api/posts/')
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse)
        this.setState({
            posts: parsedResponse
        })
        
    }
    deletePost = async (idToDelete) => {
        const deleteResponse = await fetch(`http://localhost:8000/api/posts/${idToDelete}/`, {
            method: "DELETE"
        })
        console.log(deleteResponse.status)
        if(deleteResponse.status == 204){
            this.setState({
                posts: this.state.posts.filter(c => c.id !== idToDelete)
            })
        }
        const parsedDeleteResponse = await deleteResponse.json()
        console.log(parsedDeleteResponse)
    }
    handleUpdateInputChange = (e) => {
        this.setState({
            updatePosts: {
                ...this.state.updatePosts,
                [e.target.name]: e.target.value
            }
        })

    }
    updatePost = async (idToUpdate) => {
        const apiResponse = await fetch(`http://localhost:8000/api/posts/${idToUpdate}/`, {
            method: "PUT",
            body: JSON.stringify(this.state.updatePosts),
            headers: {
                "Content-Type": "application/json"
            }

        })
        console.log(apiResponse.status)
    }
    componentDidMount(){
        this.getPosts()
        console.log("api call")
    }
    render() {
        console.log("rendering")
        return(
            <div>
                <div>
                    <NewPostComponent createNewPost={this.createNewPost} handleNewInputChange={this.handleNewInputChange}  ></NewPostComponent>
                </div>
                <div id="flex-container">
                    {this.state.posts.map((post)=>{
                        return <SinglePostComponent handleUpdateInputChange={this.handleUpdateInputChange} updatePost={this.updatePost} deletePost={this.deletePost} post={post} key={post.id} ></SinglePostComponent>
                    })}
                </div>
            </div>

        )
       
    }
}

export default ClassPostContainer 