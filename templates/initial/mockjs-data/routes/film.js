const express = require('express');
const data = require('../data');
const router = express.Router();

//电影列表
router.get('/all', (req, res) => {
  return res.json(data.filmAll);
});

router.get('/popularity', (req, res) => {
  return res.json(data.filmPopularity);
});

module.exports = router;

