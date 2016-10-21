import test from 'ava';
import {SET_TOAST, CLEAR_TOAST} from '../constant';
import {setToast, clearToast} from '../action';

test('should return the correct type for setToast',
  t => {
    t.deepEqual(setToast({content: 'Toast Content', effect: 'enter', time: 2000}), {
      type: SET_TOAST,
      content: 'Toast Content',
      effect: 'enter',
      time: 2000
    });
  }
);

test('should return the correct type for setToast, return the default value',
  t => {
    t.deepEqual(setToast({}), {
      type: SET_TOAST,
      content: '',
      effect: 'enter',
      time: 3000
    });
  }
);

test('should return the correct type for clearToast',
  t => {
    t.deepEqual(clearToast('leave'), {type: CLEAR_TOAST, effect: 'leave'});
  }
);
