import React, { Component } from 'react';
import { array, func } from 'prop-types';

import HomeList from './HomeList';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts } = this.props;
    // const posts = this.props.posts;
    return (
      <div className="Home">
        <h1>Posts Recientes</h1>
        <HomeList posts={posts} />
      </div>
    );
  }
}

Home.propTypes = {
  posts: array,
  fetchPosts: func,
};

export default Home;
