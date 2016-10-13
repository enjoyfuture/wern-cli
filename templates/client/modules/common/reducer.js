import {Map} from 'immutable';

import {
  SET_TOAST, CLEAR_TOAST
} from './action';

// 设置 toast 内容和效果
function toast(state = Map(), action) {
  const {type, content, effect, error} = action;
  if (type === CLEAR_TOAST) {
    return state.set('effect', effect);
  } else if (type === SET_TOAST) {
    return state.set('content', content).set('effect', effect);
  } else if (error) {
    return state.set('content', error).set('effect', 'enter');
  }
  return state;
}

export default toast;
