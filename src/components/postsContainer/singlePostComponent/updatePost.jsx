import { useState } from "react"

const UpdatePost = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }
    return(
        <div>
            <div>
                <div>
                    <form onSubmit={(e)=>{props.updatePost(props.post.id)}}>
                        <input onChange={props.handleUpdateInputChange} name="name" type="text" placeholder="Name"></input>
                        <br></br>
                        <input onChange={props.handleUpdateInputChange} name="description" placeholder="Description" type="text"/>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdatePost