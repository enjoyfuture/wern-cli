import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

test('renders the header properly', t => {
  const router = {
    // sinon.stub().returns(true) 对stub进行绑定。当调用stub的时候返回true。
    isActive: sinon.stub().returns(true),
  };
  const wrapper = shallow(
    <Header/>,
    {
      context: {
        router
      },
    }
  );

  t.truthy(wrapper.find('Link').first().containsMatchingElement('Wern Home'));

  t.is(wrapper.find('Link').length, 5);
});
