import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  posts: [],
  seletedPost: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      const { payload: posts } = action;
      return getNewState(state, {
        posts,
      });
    }
    case FETCH_POST_SUCCESS: {
      const { payload: selectedPost } = action;
      return getNewState(state, {
        selectedPost,
      });
    }
    case ADD_POST_SUCCESS: {
      const { payload: post } = action;
      const newPosts = [...state.posts, post];
      return getNewState(state, {
        posts: newPosts,
        selectedPost: post,
      });
    }
    case DELETE_POST_SUCCESS: {
      const { payload: id } = action;
      const filteredPosts = state.posts.filter((post) => post.id !== id);
      return getNewState(state, {
        posts: filteredPosts,
      });
    }
    case UPDATE_POST_SUCCESS: {
      const { payload: updatedPost } = action;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      const filteredPosts = state.posts.filter((post) => post.id !== updatedPost.id);
      filteredPosts.splice(index, 0, updatedPost);
      return getNewState(state, {
        posts: filteredPosts,
      });
    }
    default: {
      return state;
    }
  }
}
