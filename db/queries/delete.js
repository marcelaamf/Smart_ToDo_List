const db = require('../connection');

const deleteItem = function(id) {
  return db.query(`DELETE FROM to_do_lists WHERE user_id = $1 AND id = $2`, [1, id])
    .then((result) => {
      if (result.rowCount > 0) {
        return true; // Return true to indicate that the item was successfully deleted
      } else {
        return false; // Return false to indicate that the item was not found or not deleted
      }
    })
    .catch((err) => {
      console.log(err.message);
      throw err; // Rethrow the error to the caller to handle
    });
};

module.exports = deleteItem;
