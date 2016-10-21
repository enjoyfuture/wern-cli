import test from 'ava';
import {HELLO} from '../constant';
import {hello} from '../action';

test('should return the correct value for hello',
  t => {
    t.deepEqual(hello('Hello, World'), {
      type: HELLO,
      content: 'Hello, World',
    });
  }
);

test('should return the correct value for hello, return the default value',
  t => {
    t.deepEqual(hello(), {
      type: HELLO,
      content: '',
    });
  }
);

