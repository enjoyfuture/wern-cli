import React from 'react';
import test from 'ava';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import {Map} from 'immutable';
import classNames from 'classnames/bind';
import PersonList from '../../components/PersonList';
import styles from '../../person.scss'

const cx = classNames.bind(styles);
const personAction = {
  getPersonList: sinon.spy(), // mock方法
};
const props = {
  personAction,
  person: Map()
};

test('render children', t => {
  const wrapper = shallow(<PersonList {...props} />);
  t.is(wrapper.find(`.${cx('page-loading')}`).length, 1);
});

test('calls componentDidMount', t => {
  sinon.spy(PersonList.prototype, 'componentDidMount');
  mount(<PersonList {...props} />);

  t.truthy(PersonList.prototype.componentDidMount.calledOnce);
  PersonList.prototype.componentDidMount.restore();
});
