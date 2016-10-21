import test from 'ava';
import Immutable, {Map} from 'immutable';
import {hello} from '../action';
import home from '../reducer';

test('action for hello is working',
  t => {
    const action = hello('Hello world');
    const stateAfter = Map({content: 'Hello world'});
    t.true(Immutable.is(home(Map(), action), stateAfter))
  }
);

test('action for hello is working, the default value', t => {
  return t.true(Immutable.is(home(Map(), hello()), Map({content: ''})));
});


