import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Post.css';

class Post extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchPost,
    } = this.props;
    if (id) {
      fetchPost(id);
    }
  }

  render() {
    const { post } = this.props;

    return post ? (
      <div className="Post">
        <h1>Post {post.title}</h1>
        <img src="https://picsum.photos/1024/500" alt="banner" />
        <p>{post.description}</p>
      </div>
    ) : (
      <div><h1>There is no post for this id.</h1></div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object,
  fetchPost: PropTypes.func,
  post: PropTypes.object,
};

export default Post;
