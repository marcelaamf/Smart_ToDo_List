const db = require('../connection');

const getCategories = function (id) {

  return db.query(`SELECT users.name, categories.title, to_do_lists.item
  FROM to_do_lists
  JOIN categories ON to_do_lists.category_id = categories.id
  JOIN users ON users.id = to_do_lists.user_id
  WHERE users.id = $1`, [1])
    .then((result) => {
      if (result.rows) {
        return result.rows;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = getCategories;
