const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('mainpage');
});

router.post('/', (req, res) => {
  res.send('this page is working');
});

module.exports = router;
