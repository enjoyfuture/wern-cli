/**
 * Root Reducer
 */

import {combineReducers} from 'redux-immutable';
import routing from './helper/routing';
import toast from './modules/common/reducer';


export default combineReducers({
  routing,
  toast
});

