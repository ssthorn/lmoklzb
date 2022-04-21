import UpdatePost from "./updatePost/updatePost"
import { useState } from "react"

const SinglePostComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }

    return (
        <div id="singlepost">
            {/* <h3>Name: {props.post.name}</h3>
            <p>ID: {props.post.id}</p>
            <p>Description: {props.post.description}</p>
            <p>Votes Yes: {props.post.votesYes}</p>
            <p>Votes No: {props.post.votesNo}</p>
            <a href={props.post.id}><p>go to post</p></a> */}
            
            <h3>name: {props.post.name}</h3>
            <h5>Description: {props.post.description}</h5>
            <p>Yes: {props.post.votesYes}</p>
            <p>No: {props.post.votesNo}</p>
            <button type="button" onClick={()=>props.deletePost(props.post.id)}>Delete</button>
            {showing ?
            <UpdatePost post={props.post} handleUpdateInputChange={props.handleUpdateInputChange} updatePost={props.updatePost} ></UpdatePost>
            :
            <button type="button" onClick={toggleShowing}>Edit</button>
            }  
              
        </div>
        

    )
}

export default SinglePostComponent;