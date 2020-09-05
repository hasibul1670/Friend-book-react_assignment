import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const PostInfo = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <Post key={id} post={post} home={false}></Post>
    </div>
  );
};

export default PostInfo;
