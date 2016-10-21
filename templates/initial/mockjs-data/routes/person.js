const express = require('express');
const Mock = require('mockjs');
const data = require('../data');
const Pagination = require('../helper/Pagination');

const router = express.Router();

router.get('/list', (req, res) => {
  const {currentPage} = req.query;
  const {pageSize} = req.query;
  const pagination = new Pagination({pageSize, currentPage});
  pagination.setOptions({totalCount: 55});
  const person = data.person(currentPage);
  pagination.setItems(person.items);
  return res.json(pagination);
});

router.post('/', (req, res) => {
  const person = req.body;
  const {id, firstName, lastName} = person;
  if (id) { //修改
    return res.json({
      success: true
    });
  } else { // 增加
    return res.json({
      success: true,
      data: {
        id: Mock.mock('@guid()'),
        firstName,
        lastName
      }
    });
  }
});

router.delete('/', (req, res) => {
  const person = req.body;
  console.log(req.body);
  const {id} = person;
  if (!id) {
    return res.json({
      success: false
    });
  }
  return res.json({
    success: true
  });
});

module.exports = router;

