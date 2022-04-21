import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import {Link} from 'react-router-dom';
import SinglePostComponent from './postsContainer/singlePostComponent/SinglePostComponent';


// class New extends React.Component {
//     constructor(){
//         super()
//         console.log("constructions")
//         this.state ={
//             posts: [],
//             newPost: {
//                 name: "",
//                 description: "",
//                 votesYes: null,
//                 votesNo: null

//             }
//         }
//     }
//     handleNewPostInputChange(e){
//         console.log(this)
//     }
//     async getPosts(){
//         const data = await fetch('http://immense-lake-74773.herokuapp.com/api/posts');
//         const parsedPosts = await data.json();
//         this.setState({
//             posts: parsedPosts
//         })
//     }
//     componentDidMount(){
//         this.getPosts()
//         console.log("doing api call now that it has been rendered")
//     }
//     render(){
//         console.log("rendering")
//         return
//         <div>
//             <h2>Posts Container</h2>
//             {this.state.posts.map((post)=>{
//                 return <SinglePostComponent post={post} key={`post- ${post.id}`}>{JSON.stringify(post)}</SinglePostComponent>
//             })}
//         </div>
//     }
// }
const New = (props) => {

    // const handleNewPostInputChange=(e)=>{
    //     console.log(this)
    //     console.log(e.target.value)
    //     this.setState({
    //         ...this.state.newPost,
    //         [e.target.name] : e.target.value
    //     })
    // }
    // const newPost = {
    //                 name: "",
    //                 description: "",
    //                 votesYes: null,
    //                 votesNo: null
    //                 }
    // const createNewPost=(e)=>{
    //     e.preventDefault();
    //     this.setState({
    //         ...this.state.newPost,
    //         [e.target.name] : e.target.value
    //     })
    // }
    return(
        <div>
            
        </div>


    )
    
}
export default New;