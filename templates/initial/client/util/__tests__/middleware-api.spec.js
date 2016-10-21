import test from 'ava';
import nock from 'nock';
import api, {CALL_API} from '../middleware-api';

const testAction = {
  [CALL_API]: {
    types: {
      request: 'TEST_REQUEST',
      success: 'TEST_SUCCESS',
      failure: 'TEST_FAILURE'
    },
    url: 'test.json'
  }
};

test('method defaults to GET', t => {
  //TODO
  const callApi = api(testAction);
  //console.info(callApi.toString());
});