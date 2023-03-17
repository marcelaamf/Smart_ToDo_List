const db = require('../connection');

const updateItem = function(item) {

  return db.query(`UPDATE to_do_lists SET item = $1 WHERE to_do_lists.id = $2`, [item, 4])
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


module.exports = updateItem;
