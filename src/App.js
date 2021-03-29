//import serverURL from './getServerURL';
import React, { useState, useEffect } from 'react';
import redditIcon from './reddit.svg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [postInput, setPostInput] = useState("");

  useEffect(()=>{
    getPosts()
  },[])

  const getPosts = () =>{
    fetch(`http://localhost:3000/posts`)
    .then(res => res.json())
    .then(resJSON => {
      setPosts(resJSON)
    });
  }

  const createPost = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/posts', {
        text: postInput,
        userName: "melinda",
    })
    .then(function (response) {
      if(response.data.message==="success"){
        getPosts()
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const showPosts = (posts) => {
    let postEl = posts.map((post, index)=>{
      return (
        <div className="container rounded m-2" style={{backgroundColor:"#F6F7F8", color:"black"}} key={index}>
          {post.text}
          <button className="float-right btn btn-dark m-2" onClick={editPost}>Edit</button>
          <button className="float-right btn btn-dark m-2" onClick={deletePost}>Delete</button>
        </div>
      )
    })
    return postEl;
  }

  const deletePost = () => {
    //fetch to delete post
    //need post id
  }

  const editPost = () => {
   //fetch to update post
    //need post id
  }

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
        <form onSubmit={createPost} className="p-2 pl-5">
          <label>
            <h2>
              Create Post
            </h2>
            <input 
              type="text" 
              value={postInput} 
              onChange={(e)=>setPostInput(e.target.value)} 
              placeholder="Write your thoughts"
              name="text"
              style={{color:"black"}}
            />
          </label>
          <input type="submit" style={{color:"black"}}/>
        </form>
        <h2 className="p-2 pl-5">
          Posts
        </h2>
        <div className="p-2 pl-5 overflow-auto" style={{maxHeight:"40em"}}>
          {showPosts(posts)}
        </div>
      </div>

    </div>
  );
}

export default App;
