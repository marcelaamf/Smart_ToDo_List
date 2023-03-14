const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('toeat');
});

module.exports = router;

// router.get('/', (req, res) => {
// const query = `SELECT * FROM to_do_lists
// WHERE categories_id = 1`;
// console.log(query);

// db.query(query)
//   .then(data => {
//     const todo = data.rows;
//     res.json({ todo });
//   })
//   .catch(err => {
//     res
//       .status(500)
//       .json({ error: err.message });
//   });
// });
