const db = require('../connection');

const deleteItem = function() {

  return db.query(`DELETE FROM to_do_lists WHERE user_id = $1 AND id = $2`, [1, 2])
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


module.exports = deleteItem;
