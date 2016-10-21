import test from 'ava';
import callApi from '../fetch';
import nock from 'nock';
import config from '../../config';

const SERVER_URL = config.SERVER_URL;

test('method defaults to GET', t => {
  const reply = {
    success: true,
    data: [{
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
    }],
    message: '成功'
  };
  nock(SERVER_URL)
    .get('/film/popularity')
    .reply(200, reply);
  return callApi({url: 'film/popularity'}).then(res => {
    t.deepEqual(res, reply);
  });
});

test('method defaults to POST', t => {
  const body = {
    firstName: 'zhang',
    lastName: 'san',
    id: null
  };
  const reply = {
    success: true,
    data: {id: 'fBf2FFfA-b5fB-9Eb8-Bf3B-3EE914F66713', firstName: 'zhang', lastName: 'san'}
  };
  nock(SERVER_URL)
    .post('/person', body)
    .reply(200, reply);
  return callApi({url: 'person', method: 'post', body}).then(response => {
    t.deepEqual(response, reply);
  });
});

test('returns the 404 error', t => {
  const reply = new Error('Not Found');
  reply.errorCode = 404;
  nock(SERVER_URL)
    .get('/send_error')
    .reply(404, reply);
  return callApi({url: 'send_error'}).then(error => {
    t.deepEqual(error, reply);
  });
});

test('returns {success: false} error', t => {
  const reply = new Error('获取数据出错');
  reply.errorCode = undefined;
  nock(SERVER_URL)
    .delete('/person', {})
    .reply(200, reply);
  return callApi({url: 'person', method: 'delete'}).then(error => {
    t.deepEqual(error, reply);
  });
});

test('not pass by url error', t => {
  t.throws(callApi({}), '请传入 url');
});

test('The url is an absolute path', t => {
  const reply = {
    success: true,
    data: {
      id: 100,
      count: 1,
      content: 'vote'
    }
  };

  nock(SERVER_URL)
    .post('/vote/topic')
    .reply(200, reply);
  return callApi({
    url: 'http://localhost:9090/api/vote/topic',
    body: {
      count: 1,
      content: 'vote'
    },
    method: 'post'
  }).then(response => {
    t.deepEqual(response, reply);
  });
});