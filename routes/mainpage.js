const express = require('express');
const router = express.Router();
const getCategories = require('../db/queries/categories.js');
module.exports = function (db) {


  router.get('/', (req, res) => {
    res.render('mainpage');
  });

  router.post('/', (req, res) => {
    getCategories()
      .then((data) => {
        console.log(data);
        res.json(data);

      }) .catch((error) => {
        console.log(error);
      });
    res.send('this page is working');
  });
  return router;
};
