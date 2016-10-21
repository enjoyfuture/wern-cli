import test from 'ava';
import Immutable, {Map} from 'immutable';
import sinon from 'sinon';
import process from '../processReducer';

const data = [{
  id: 100,
  name: '我的少女时代',
  link: 'http://www.iqiyi.com/v_19rrkib984.html#vfrm=2-4-0-1'
}, {
  id: 102,
  name: '怦然星动',
  link: 'http://www.iqiyi.com/v_19rrkfltns.html#vfrm=2-4-0-1'
}, {
  id: 103,
  name: '致我们终将到来的爱情',
  link: 'http://www.iqiyi.com/v_19rrlpbu28.html#vfrm=2-4-0-1'
}];

const types = {
  request: 'REQUEST', success: 'SUCCESS', failure: 'FAILURE', clean: 'CLEAN'
};
const processData = process({types});

test('data is list: send request then success', t => {
  // request
  const nextState = processData(undefined, {type: 'REQUEST'});
  t.true(Immutable.is(nextState, Map({isFetching: true})));

  //success
  let successState = processData(nextState, {type: 'SUCCESS', data});
  t.true(Immutable.is(successState, Map({isFetching: false, entities: Immutable.fromJS(data)})));
  // 先清空数据
  successState = processData(nextState, {type: 'SUCCESS', data, clean: true});
  t.true(Immutable.is(successState, Map({isFetching: false, entities: Immutable.fromJS(data)})));
});

test('clean data', t => {
  // clean
  const nextState = processData(undefined, {type: 'CLEAN'});
  t.true(Immutable.is(nextState, Map({isFetching: false})));
});

test('data is list: send request then failure', t => {
  // request
  const nextState = processData(undefined, {type: 'REQUEST'});
  t.true(Immutable.is(nextState, Map({isFetching: true})));

  //failure
  const failureState = processData(nextState, {type: 'FAILURE', data});
  t.true(Immutable.is(failureState, Map({isFetching: false})));
});


test('data is paging: send request then success', t => {
  const data = {
    pageSize: 3,
    currentPage: 1,
    totalCount: 5,
    pageCount: 2,
    lastPage: false,
    items: [{
      firstName: 'Wang1',
      lastName: 'Wu1',
      id: '9A67f1cD-Cd64-73f9-eDaf-E7F8c16b1aAf'
    }, {
      firstName: 'Zhang1',
      lastName: 'San1',
      id: '36269aAE-1c01-aF1C-63BF-64D29F6eDDe2'
    }, {
      firstName: 'Liu1',
      lastName: 'Ba1',
      id: 'cD2B34Fd-48A5-EFC4-bbCC-Ad6bD77Aa0Cc'
    }]
  };

  const types = {
    request: 'REQUEST', success: 'SUCCESS'
  };
  const processData = process({types});
  // request
  const nextState = processData(undefined, {type: 'REQUEST'});
  t.true(Immutable.is(nextState, Map({isFetching: true})));

  //success
  let successState = processData(nextState, {type: 'SUCCESS', data});
  t.true(Immutable.is(successState, Map({isFetching: false, entities: Immutable.fromJS(data)})));

  //第二页数据
  const nextData = {
    pageSize: 3,
    currentPage: 2,
    totalCount: 5,
    pageCount: 2,
    lastPage: true,
    items: [{
      firstName: 'Wang1',
      lastName: 'Wu1',
      id: '9A67f1cD-Cd64-73f9-eDaf-E7F8c16b1aA4'
    }, {
      firstName: 'Zhang1',
      lastName: 'San1',
      id: '36269aAE-1c01-aF1C-63BF-64D29F6eDDe4'
    }, {
      firstName: 'Liu1',
      lastName: 'Ba1',
      id: 'cD2B34Fd-48A5-EFC4-bbCC-Ad6bD77Aa0C4'
    }]
  };
  successState = processData(successState, {type: 'SUCCESS', data: nextData});
  const _nextData = Object.assign(nextData);
  const nextItems = _nextData.items;
  delete _nextData.items;

  const lastData = Object.assign(data, _nextData);
  lastData.items = lastData.items.concat(nextItems);

  t.true(Immutable.is(successState,
    Map({
      isFetching: false,
      entities: Immutable.fromJS(lastData)
    })));
});

test('customTypes: custom method', t => {
  const customTypes = {
    update: sinon.spy()
  };
  const processData = process({
    types: {}, customTypes
  });
  processData(undefined, {type: 'update'});
  t.truthy(customTypes.update.calledOnce);
});
