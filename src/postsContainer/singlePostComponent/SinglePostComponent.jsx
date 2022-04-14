const SinglePostComponent = (props) => {

    return (
        <div>
            <h3>Name: {props.post.name}</h3>
            <p>Description: {props.post.description}</p>
            <p>Votes Yes: {props.post.votesYes}</p>
            <p>Votes No: {props.post.votesNo}</p>
        </div>

    )
}

export default SinglePostComponent;