import { useState } from "react"

const NewPostComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }
    return (
        <div>
            {showing?
            <div>
            <div>
                <form onSubmit={props.createNewPost}>
                    <input onChange={props.handleNewInputChange} name="name" type="text" placeholder="name"></input>
                    <br></br>
                    <input onChange={props.handleNewInputChange} name="description" type="text" placeholder="description"/>
                    <br></br>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={toggleShowing}>Done</button>
                </form>
            </div>
        </div>
        :
        <button className="Create-button" onClick={toggleShowing}>Add A Post</button>
            }
        </div>
        

       
    )
}
export default NewPostComponent