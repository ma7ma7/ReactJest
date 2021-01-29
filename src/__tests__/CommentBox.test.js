import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it('Is CommentBox Has A textarea And Button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('The TextArea', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapped.update();
  });

  it('Is textarea allow editing', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('Is Form Submit empty the textarea', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
