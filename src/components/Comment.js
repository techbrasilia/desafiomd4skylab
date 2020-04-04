import React from 'react';

function Comment({ data }) {
  return (
    <div>
      <div className='divider'></div>
      <div key={data.id} className='post-comments'>
        <div className='comment'>
          <div className='avatar'>
            <img className='avatar' src={data.author.avatar} />
          </div>
          <p>
            <span>{data.author.name}</span>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
