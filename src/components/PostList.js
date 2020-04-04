import React, { Component } from 'react';

import Post from './Post';

import perfil1 from '../assets/perfil1.jpg';
import perfil2 from '../assets/perfil2.jpg';

import '../App.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: perfil1,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: perfil1,
            },
            content: 'Conteúdo do comentário',
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: perfil1,
            },
            content: 'Conteúdo do comentário',
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: perfil1,
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: perfil2,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: perfil2,
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className='postlist'>
        {this.state.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}
export default PostList;
