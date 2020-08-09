import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../../actions/postActions';
import Home from './Home';

const mapStateToProps = ({ post }) => ({ posts: post.posts });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
