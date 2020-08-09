import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { Form, Control, Errors } from 'react-redux-form';
import { FormGroup, Label, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const required = (val) => val && val.length;

class CreateForm extends Component {
  handleOnSubmit = (values) => {
    this.handleAddNewPost(values);
    this.props.history.push('/');
  };

  handleAddNewPost = (values) => {
    const { addPost, resetPostForm } = this.props;
    if (values.title) {
      addPost({
        title: values.title,
        description: values.description,
        user: values.user,
        comments: [],
      });
    }
    resetPostForm();
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  render() {
    return (
      <div>
        <Form
          className="CreateForm"
          model="postForm"
          onSubmit={(values) => this.handleOnSubmit(values)}
          getDispatch={(dispatch) => this.attachDispatch(dispatch)}
        >
          <FormGroup>
            <Label for="title">Title</Label>
            <Control.text
              model=".title"
              name="title"
              id="title"
              placeholder="Post Title"
              className="form-control"
              validators={{ required }}
            />
            <Errors className="error" model=".title" show="touched" messages={{ required: 'Required' }} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Control.textarea
              id="description"
              name="description"
              className="form-control"
              placeholder="Post Content"
              model=".description"
              validators={{ required }}
            />
            <Errors
              className="error"
              model=".description"
              show="touched"
              messages={{ required: 'Este elemento es requerido*' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="user">User</Label>
            <Control.text
              model=".user"
              id="user"
              name="user"
              className="form-control"
              placeholder="Post User"
              validators={{ required }}
            />
            <Errors
              className="error"
              model=".user"
              show="touched"
              messages={{ required: 'Este elemento es requerido*' }}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

CreateForm.propTypes = {
  addPost: func,
  resetPostForm: func,
  history: object
};

export default withRouter(CreateForm);
