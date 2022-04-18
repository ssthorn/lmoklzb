import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import {Link} from 'react-router-dom';
import New from './new';
import SinglePostComponent from './postsContainer/singlePostComponent/SinglePostComponent';


// const All=()=>{
//     useEffect(() => {
//         getPosts();
//     }, []);
    
//     const [posts, setPosts] = useState([]);
//     const getPosts = async () => {
//         const data = await fetch(
//             'http://immense-lake-74773.herokuapp.com/api/posts'
//         );
//         const posts = await data.json();
//         console.log(posts);
//         setPosts(posts);
//     };
//     const handleNewPostInputChange=(e)=>{
//         console.log(this)
//         console.log(e.target.value)
//         this.setState({
//             ...this.state.newPost,
//             [e.target.name] : e.target.value
//         })
//     }

//     return(
//         <div>
            
//             <h1>all posts</h1>
//             {posts.map(post=>(
//                 <h2 key={post.id}>
//                     <Link to={`/new/${post.id}`}>{post.name}</Link>
                    
//                 </h2>
                
//             ))}
//         </div>
//     )
// }

class All extends React.Component {
    constructor(){
        super()
        console.log("constructions")
        this.state ={
            posts: [],
            newPost: {
                name: "",
                description: "",
                votesYes: null,
                votesNo: null

            }
        }
    }
    handleNewPostInputChange=(e)=>{
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            newPost:{
                ...this.state.newPost,
            [e.target.name] : e.target.value
            }
        })
    }
    createNewPost = async(e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:8000/api/posts/',{
            method: "POST",
            body: JSON.stringify(this.state.newContact),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const creationResponseParsed = await data.json()
        console.log(creationResponseParsed)
        this.setState({
            posts:[...this.state.contacts, creationResponseParsed]
        })
    }
    async getPosts(){
        const data = await fetch('http://localhost:8000/api/posts/');
        const parsedPosts = await data.json();
        this.setState({
            posts: parsedPosts
        })
    }
    componentDidMount(){
        this.getPosts()
        console.log("doing api call now that it has been rendered")
    }
    render(){
        console.log("rendering")
        return(
            <div>
                <h2>Posts Container</h2>
                <New handleNewPostInputChange={this.handleNewPostInputChange} 
                creatNewPost={this.createNewContact}/>
                {this.state.posts.map((post)=>{
                    return <SinglePostComponent post={post} key={`post- ${post.id}`} />
                })}
                
                <h1>all posts</h1>
                {this.state.posts.map(post=>(
                <h2 key={post.id}>
                <Link to={`/new/${post.id}`}>{post.name}</Link>
                </h2>
                ))}

            </div>
        )
    }
}
export default All;
