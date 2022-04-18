import React, {useState, useEffect} from 'react';
// import axios from 'axios'
// import {Link} from 'react-router-dom';


const PostDetail=()=>{
    useEffect(() => {
        getPost();
    }, []);
    
    const [post, setPost] = useState({});
   
    const getPost = async () => {
        const data = await fetch(
            'http://localhost:8000/api/posts/'
        );
        const post = await data.json();
        console.log(post);
        setPost(post);
    };
    return(
        <div>
            <h1>item</h1>
        </div>
    )
}
export default PostDetail;