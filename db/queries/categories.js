const db = require('../connection');

const getCategories = function (id) {

  return db.query(`SELECT * FROM categories WHERE id = $1`, [id])
  // return db.query(`SELECT * FROM users
  // JOIN to_do_lists ON users.id = user_id
  // JOIN categories ON categories.id = category_id
  // WHERE users.id = $1
  // GROUP BY users.id, to_do_lists.id, categories.id;
  // `, [1])
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
