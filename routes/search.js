const express = require('express');
const router = express.Router();
const { yelpSearch } = require('../api/yelp');
const addItem = require('../db/queries/helperFunction');

//get category
router.get('/', (req, res) => {
    const city = req.query.city
    const term = req.query.term
    console.log('city', city)
    console.log('term', term)
    if (city && term) {
        return yelpSearch(term, city).then(data => {
           return res.send({ data })
        })
    }

    return res.status(400).send('No params provided')
});

router.post('/', (req, res) => {
  const userId = 1;
  const item = req.body.item;
  const category = req.body.category;
  addItem(userId, item, category)
  .then(() => res.send('ok'))
});


module.exports = router
