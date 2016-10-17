const Mock = require('mockjs');

/*eslint-disable prefer-template*/
module.exports = (currentPage) => {
  return Mock.mock({
    'items|1-10': [
      {
        id: () => {
          return Mock.mock('@guid()');
        },
        'firstName|+1': [
          'Wang' + currentPage,
          'Zhang' + currentPage,
          'Liu' + currentPage
        ],
        'lastName|+1': [
          'Wu' + currentPage,
          'San' + currentPage,
          'Ba' + currentPage
        ]
      }
    ]
  });
};