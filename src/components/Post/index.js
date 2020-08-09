import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addPost,
  updatePost,
  deletePost,
  fetchPost
} from '../../actions/postActions';

import Post from './Post';

const mapStateToProps = ({ post }) => ({ post: post.selectedPost });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPost,
      addPost,
      updatePost,
      deletePost,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Post);
