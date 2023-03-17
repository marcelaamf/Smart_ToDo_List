const express = require('express');
const router = express.Router();
const getCategories = require('../db/queries/categories');
const clientSearch = require('../db/queries/getItems.js');
const addItem = require('../db/queries/helperFunction.js');
const helperFunction = require('../db/queries/helperFunction.js');
const updateItem = require('../db/queries/update');
const deleteItem = require('../db/queries/delete');
const insertItem = require('../db/queries/insert');
const axios = require('axios');

//get category
router.get('/:id', (req, res) => {
  getCategories(req.params.id)
    .then((data) => {
      // const templateVars = { categories: data }
      console.log('templateVars', data);
      res.send({ data })
    });
});

//post categories
router.post('/', (req, res) => {
  getCategories()
    .then((data) => {
      res.json(data);

    }).catch((error) => {
      console.log(error);
    });
  res.send('this page is working');
});

router.patch('/', (req, res) => {
  updateItem(req.params.id)
    .then((data) => {
      console.log('data');
      res.send({ data })
    });
});

// router.delete('delete/:id', (req, res) => {
//   deleteItem(req.params.id)
//     .then((data) => {
//       console.log('data');
//       res.send({ data })
//     });
// });

// router.delete('/movies/:title', (req, res) => {
//   const title = req.params.title;
//   // Code to delete the movie with the given title from your data store
//   // ...
//   res.sendStatus(204); // Send a 204 No Content response to indicate success
// });



// router.delete('/delete/:id', (req, res) => {
//   const id = req.params.id;
//   // Call function to delete item from database using id
//   deleteItem(id)
//     .then(response => {
//       // handle success response from server
//       res.status(204).send(); // Return a 204 No Content status code to indicate successful deletion
//     })
//     .catch(error => {
//       // handle error response from server
//       console.log(error);
//       res.status(500).send(); // Return a 500 Internal Server Error status code to indicate error
//     });
// });

module.exports = router;


