const db = require('../connection');

const insertItem = function(item) {

  return db.query(`INSERT INTO to_do_lists (user_id , item, cateqory_id) VALUES ($1, $2, $3)`, [1, item, 4])
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


module.exports = insertItem;
