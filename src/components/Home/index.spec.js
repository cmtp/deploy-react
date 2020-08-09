import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { fetchPosts } from '../../actions/postActions';

import Container from './index';

const mockInitialState = {
  post: {
    posts: [
      {
        id: '98a76fb7-8638-4ec1-82ba-debc7a6952c5',
        title: 'Lorem Ipsum 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
        user: '66907a5e-9299-4d9b-989f-c0934bdb1ca5',
        comments: [],
      },
      {
        id: '2b3ba5bb-c3a6-40ad-9c12-5ec0ad0565ac',
        title: 'Lorem Ipsum 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
        user: 'c27e65d4-73d9-4058-be59-d38a5a222356',
        comments: [],
      },
      {
        id: 'ef0162b8-0e43-46b3-9f58-1a5871c1bd88',
        title: 'Lorem Ipsum 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
        user: 'd085bcd3-db11-49a9-8d1e-49abf8417eb8',
        comments: [],
      },
      {
        id: 'a77954f4-45a9-4dd6-81c7-a28e10ab9e25',
        title: 'Lorem Ipsum 4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
        user: 'c27e65d4-73d9-4058-be59-d38a5a222356',
        comments: [],
      },
      {
        id: 'f1c8cf97-d50a-4585-885c-489ca0b6077d',
        title: 'Lorem Ipsum 5',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
        user: 'd085bcd3-db11-49a9-8d1e-49abf8417eb8',
        comments: [],
      },
      {
        title: 'test',
        description: 'sssad sas ',
        user: '66907a5e-9299-4d9b-989f-c0934bdb1ca5',
        comments: [],
        id: 'ZYdlqiC',
      },
      {
        title: 'test',
        description: 'ssssssss',
        user: 'c27e65d4-73d9-4058-be59-d38a5a222356',
        comments: [],
        id: 'QaR06Ay',
      },
    ],
  },
};

const mockStore = configureStore()(mockInitialState);
jest.mock('../../actions/postActions', () => ({
  fetchPosts: jest.fn().mockReturnValue({ type: 'mock-FETCH_POSTS_SUCCESS' }),
}));

describe('Home Container', () => {
  let mockParams;
  let container;

  beforeEach(() => {
    fetchPosts.mockClear();
    mockParams = {};
    mockStore.clearActions();
    // eslint-disable-next-line react/jsx-props-no-spreading
    container = shallow(<Container {...mockParams} store={mockStore} />).dive();
  });

  it('should dispatch fetchPosts', () => {
    // eslint-disable-next-line no-shadow
    const { fetchPosts } = container.props();
    fetchPosts();

    const actions = mockStore.getActions();
    expect(actions).toEqual([{ type: 'mock-FETCH_POSTS_SUCCESS' }]);
  });

  it('Should return posts from mapStateToProps', () => {
    const { posts } = container.props();
    const postList = mockInitialState.post.posts;

    expect(posts).toEqual(postList);
  });
});
