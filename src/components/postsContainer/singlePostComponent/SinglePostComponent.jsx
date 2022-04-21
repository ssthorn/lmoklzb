import UpdatePost from "./updatePost";

const SinglePostComponent = (props) => {

    return (
        <div>
            {/* <h3>Name: {props.post.name}</h3>
            <p>ID: {props.post.id}</p>
            <p>Description: {props.post.description}</p>
            <p>Votes Yes: {props.post.votesYes}</p>
            <p>Votes No: {props.post.votesNo}</p>
            <a href={props.post.id}><p>go to post</p></a> */}
            <div id="post-divs">
            <h3>name: {props.post.name}</h3>
            <h5>Description: {props.post.description}</h5>
            <p>Yes: {props.post.votesYes}</p>
            <button className="form-button" onClick={()=>props.deletePost(props.post.id)}>delete this post</button>
            
            <UpdatePost post={props.post} handleUpdateInputChange={props.handleUpdateInputChange} updatePost={props.updatePost} ></UpdatePost>
        
              
        </div>
        </div>

    )
}

export default SinglePostComponent;