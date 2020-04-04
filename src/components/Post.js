import React from 'react';
import Comment from './Comment';

function Post({ data }) {
  return (
    <div>
      <div key={data.id} className='post'>
        <div className='post-header'>
          <div className='avatar'>
            <img className='avatar' src={data.author.avatar} />
          </div>
          <div className='details'>
            <span>{data.author.name}</span>
            <span>{data.date}</span>
          </div>
        </div>
        <div className='post-content'>{data.content}</div>

        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
      <div className='divider'></div>
    </div>
  );
}
export default Post;
