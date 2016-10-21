import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {Map} from 'immutable';
import Person from '../../components/Person';
import bootstrap from '../../../../util/bootstrapCss';

const children = <h1>Person Test</h1>;
const props = {
  children,
  // 因为 Person 中实际没有真正用到 personAction 中的方法，故这里为了演示，只设置一个
  personAction: {
    cleanPersonList: sinon.spy(), // mock方法
  },
  person: Map()
};

test('render children', t => {
  const wrapper = shallow(<Person {...props} />);
  t.is(wrapper.find('h1').length, 1);
  t.true(wrapper.text() === 'Person Test');
  t.truthy(wrapper.hasClass(bootstrap('container')));
  t.truthy(wrapper.children(), children);
});