const express = require('express');
const router = express.Router();
const getCategories = require('../db/queries/categories');
const clientSearch = require('../db/queries/getItems.js');
const addItem = require('../db/queries/helperFunction.js');
const helperFunction = require('../db/queries/helperFunction.js');
const updateItem = require('../db/queries/update');
const deleteItem = require('../db/queries/delete');
const insertItem = require('../db/queries/insert');

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

router.delete('/:id', (req, res) => {
  deleteItem(req.params.id)
    .then((data) => {
      console.log('data');
      res.send({ data })
    });
});



module.exports = router;



//get item
// router.get('/', (req, res) => {

//   const addItem = addItem()
//     .then((data) => {
//       console.log("data:",data);
//       const templateVars = { user_id:1,
//       item: item };
//       console.log('templateVars', templateVars);
//       res.render('index', templateVars);
//     });
// });





//get client search
/* router.get('/', (req, res) => {
  console.log('test');
  const clientSearch = clientSearch()
    .then((data) => {
      const templateVars = { clientSearch: data }
      console.log('templateVars', templateVars);
      res.render('index', templateVars);
    });
}); */
