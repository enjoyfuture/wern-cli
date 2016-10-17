const Mock = require('mockjs');

const topics = Mock.mock({
  'success': true,
  'data': [
    {
      'id': 1,
      'count': 1,
      'content': 'vote1'
    },
    {
      'id': 2,
      'count': 2,
      'content': 'vote2'
    },
    {
      'id': 3,
      'count': 1,
      'content': 'vote3'
    },
    {
      'id': 4,
      'count': 1,
      'content': 'vote4'
    }
  ],
  'message': '成功'
});

module.exports = {
  topics
};

