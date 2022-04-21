import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'


const Nav=()=>{

    return(
        <nav >
            <h3>logo</h3>
            <ul className="nav-links">
                {/* <Link to='/about'><li>about</li></Link> */}
                <Link to='/new'><li >new</li></Link>
                <Link to='/all'><li >all</li></Link>
                <Link to='/'><li >home</li></Link>
            </ul>
        </nav>
    )
}
export default Nav;