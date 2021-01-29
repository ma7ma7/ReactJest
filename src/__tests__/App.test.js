import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentsList from 'components/CommentsList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('Is App Render CommentBox', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('Is App render CommentsList', () => {
  expect(wrapped.find(CommentsList).length).toEqual(1);
});
