/**
 * Root Reducer
 */

import {combineReducers} from 'redux-immutable';
import routing from './util/routing';
import toast from './modules/app/reducer';
import home from './modules/home/reducer';
import film from './modules/film/reducer';
import vote from './modules/vote/reducer';
import person from './modules/person/reducer';

export default combineReducers({
  routing,
  toast,
  home,
  film,
  vote,
  person
});

