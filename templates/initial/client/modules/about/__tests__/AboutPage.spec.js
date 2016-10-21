import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import classNames from 'classnames/bind';
import About from '../AboutPage';
import styles from '../about.scss';
const cx = classNames.bind(styles);

//单元测试，测试渲染的属性是否正确
test('About renders properly', t => {
  const wrapper = shallow(
    <About />
  );

  t.is(wrapper.find(`.${styles.about}`).length, 1);
  t.is(wrapper.find(`.${cx('about-img')} > img`).length, 5);
  t.true(wrapper.find('> h2').text() === 'React, Redux, Router, Webpack, Gulp etc.');
});

