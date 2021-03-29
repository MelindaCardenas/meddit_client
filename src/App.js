//import serverURL from './getServerURL';
import React, { useState, useEffect } from 'react';
import redditIcon from './reddit.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:7000/posts`)
    .then(res => res.json())
    .then(resJSON => {
      setPosts(resJSON)
    });
  },[])

  return (
    <div className="App">
      <div className="d-flex flex-row justify-content-around" style={{backgroundColor:"#FF4602", color:"white"}}>
        <div className="d-flex align-items-center" style={{maxHeight:'7em', maxWidth:'5em'}}>
          <img src={redditIcon} alt="reddit icon of red robot" style={{maxWidth:'100%', maxHeight:'100%'}}/>
        </div>
        <h1 className="text-center d-flex align-items-center">
          Meddit
        </h1>
        <div className="d-flex align-items-center">
        </div>
      </div>

      <div style={{backgroundColor:"#F6F7F8"}}>
        <div className="d-flex justify-content-center">
          <form className="d-flex flex-column p-5 text-center" style={{maxWidth:'25em'}}>
            <label><h2>Who Are You?</h2></label>
            <input placeholder="username" className="mb-2"></input>
            <input type="submit" className="mb-2 btn btn-dark"></input>
            <button className="btn" style={{backgroundColor:"#FF4602", color:"white"}}>Sign Up</button>
          </form>
        </div>
      </div>

      <div className="bg-dark" style={{color:"white", height:'100vh'}}>
        <h2 className="p-2 pl-5">
          Posts
        </h2>
        <div>
          {/* {posts.map(post=> console.log(post))} */}
          {showPosts(posts)}
        </div>
      </div>

    </div>
  );
}

const showPosts = (posts) => {
  let postEl = posts.map((post)=>{
    return (
      <div className="container rounded m-2" style={{backgroundColor:"#F6F7F8"}}>
        {post.text}
      </div>
    )
  })
  return postEl;
}

export default App;
