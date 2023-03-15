const express = require('express');
const router = express.Router();
const getCategories = require('../db/queries/categories.js');
module.exports = function (db) {


  router.get('/', (req, res) => {
    console.log('test');
    const categories = getCategories()
      .then((data) => {
        const templateVars = { categories: data }
        console.log('templateVars', templateVars);
        res.render('index', templateVars);
      });
  });

  router.post('/', (req, res) => {
    getCategories()
      .then((data) => {
        res.json(data);

      }).catch((error) => {
        console.log(error);
      });
    res.send('this page is working');
  });
  return router;
};
