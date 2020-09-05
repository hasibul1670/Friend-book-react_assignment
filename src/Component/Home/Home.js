import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post,setpost]=useState([]);

    useEffect(()=>{
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>setpost(data))
  
    },[])
    return (
        <div className="App">
    
      
        <h1>Total Posts:{post.length}</h1>

        
             
      {post.map((post) => (
        <Post key={post.id} post={post} home={true}></Post>
      ))
      
      }
          </div>
    );
};

export default Home;