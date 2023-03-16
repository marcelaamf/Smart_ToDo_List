const yelpAPI = require('yelp-api');



const yelp = require('yelp-fusion');
const client = yelp.client('jmr1iku4kt5iynJ92qDPu2rQqleYcq4IyHCxQBBNx2QzHeseSm3KWDSlmjYtRguLGe6N6sWP4CZlzSIxvJ8Oq6aaKaiPFLbltgsOylbDA8QSo7Qs9Scdu37K6bEPZHYx');



// Use client.search() method to search for businesses based on our params
const clientSearch = function(){
client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
  return (response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
};
client.eventLookup("oakland-saucy-oakland-restaurant-pop-up").then(response => {
  console.log(response.jsonBody.description);
}).catch(e => {
  console.log(e);
});

module.exports = clientSearch;
