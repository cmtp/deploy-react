import React from 'react';
import { func } from 'prop-types';

import CreateForm from './CreateForm';

const Create = (props) => {
  const { addPost, resetPostForm } = props;
  return (
    <div className="Create">
      <h1>Create Post</h1>
      <CreateForm addPost={addPost} resetPostForm={resetPostForm} />
    </div>
  );
};

Create.propTypes = {
  addPost: func,
  resetPostForm: func,
};

export default Create;
