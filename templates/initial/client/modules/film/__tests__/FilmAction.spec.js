import test from 'ava';
import sinon from 'sinon';
import * as FilmActionTypes from '../constant';
import {getFilmList, cleanFilmList} from '../action';

const {
  ALL_FILM_REQUEST, ALL_FILM_SUCCESS, ALL_FILM_FAILURE, ALL_FILM_CLEAN,
  POPULARITY_FILM_REQUEST, POPULARITY_FILM_SUCCESS, POPULARITY_FILM_FAILURE, POPULARITY_FILM_CLEAN
} = FilmActionTypes;

const dispatch = sinon.spy();
test('should return the correct type for getFilmList', t => {
  //t.truthy(dispatch.calledWith(getFilmList('all')));
});
