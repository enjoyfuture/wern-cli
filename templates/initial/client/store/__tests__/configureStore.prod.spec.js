import test from 'ava';
import {browserHistory} from 'react-router';
import Immutable from 'immutable';
import configureStore from '../configureStore.prod';

test('configureStore Test', t => {
  const store = configureStore(browserHistory, Immutable.fromJS({}));
  const methods = Object.keys(store);
  t.is(methods.length, 4);
  t.true(methods.indexOf('dispatch') !== -1);
  t.true(methods.indexOf('subscribe') !== -1);
  t.true(methods.indexOf('getState') !== -1);
  t.true(methods.indexOf('replaceReducer') !== -1);
  t.deepEqual(methods, ['dispatch', 'subscribe', 'getState', 'replaceReducer']);
});