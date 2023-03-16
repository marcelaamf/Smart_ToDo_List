const yelp = require('yelp-fusion');
const client = yelp.client('jmr1iku4kt5iynJ92qDPu2rQqleYcq4IyHCxQBBNx2QzHeseSm3KWDSlmjYtRguLGe6N6sWP4CZlzSIxvJ8Oq6aaKaiPFLbltgsOylbDA8QSo7Qs9Scdu37K6bEPZHYx');
//Request to Yelp's API to check for local restaurants and cafes.
const yelpSearch = (queryString, city) => {
    return client.search
        ({
            term: queryString,
            location: city,
        }).then(response => {
            return response.jsonBody.businesses[0].name;
        }).catch(e => {
            console.log(e);
        });
};

module.exports = { yelpSearch }
