import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import Footer from '../../components/Footer';

test('renders the footer properly', t => {
  const wrapper = shallow(
    <Footer />
  );

  t.is(wrapper.find('p').length, 2);
  t.is(wrapper.find('p').first().text(), '© 2016 · Linder · Wern team Inc.');
  t.is(wrapper.find('p > a').prop('href'), 'https://www.npmjs.com/package/wern-cli');
});
