import React, { useEffect, useState } from 'react';
import SingleComment from '../Commentinfo/Commentinfo';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h3>Comments of this Post</h3>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
