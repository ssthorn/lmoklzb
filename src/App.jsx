import React from 'react';
import './App.css';

import PostsContainer from './components/postsContainer/postsContainer';

import New from './components/new';
import About from './components/about';
import Nav from './components/nav';
import All from './components/all';
import Home from './components/home';
import PostDetail from './components/postDetail';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// import SinglePostComponent from './postsContainer/singlePostComponent/SinglePostComponent';

const App=()=> {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />
          <Route path="/all" element={<All />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new/:id" element={<PostDetail />} />
        </Routes>
        
        <PostsContainer />
      </div>
    </Router>
    
  );
}



export default App;
