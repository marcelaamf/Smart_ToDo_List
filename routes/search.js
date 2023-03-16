const express = require('express');
const router = express.Router();
const { yelpSearch } = require('../api/yelp');

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

module.exports = router
