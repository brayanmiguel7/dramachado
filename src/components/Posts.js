import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component{

    render(){

        return this.props.posts.map((post) =>  <Post key={ post.id } post={ post } /> )

    }

}


export default Posts;