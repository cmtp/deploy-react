import React from 'react';
import { array } from 'prop-types';
import HomeListItem from './HomeListItem';
import { isFirstRender } from '../../shared/utils/frontend';

import './HomeList.css';

const HomeList = ({ posts }) => (
  <>
    {isFirstRender(posts) ? (
      <div>There is no Posts.</div>
    ) : (
      <div className="HomeList">
        {posts.map((post) => (
          <HomeListItem post={post} key={post.id} />
        ))}
      </div>
    )}
  </>
);

HomeList.propTypes = {
  posts: array,
};

export default HomeList;
