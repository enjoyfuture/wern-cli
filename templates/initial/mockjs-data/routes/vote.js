const express = require('express');
const data = require('../data');
const router = express.Router();

let uuid = 100;
router.post('/topic', (req, res) => {
  const vote = req.body;
  return res.json({
    success: true,
    data: {
      id: uuid++,
      count: 1,
      content: vote.content
    }
  });
});

router.get('/topics', (req, res) => {
  return res.json(data.topics);
});

router.put('/count', (req, res) => {
  return res.json({
    success: true
  });
});

router.delete('/topic/:id', (req, res) => {
  return res.json({
    success: true
  });
});

module.exports = router;
