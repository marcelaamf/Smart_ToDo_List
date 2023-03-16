// Add new task to database
const db = require('../connection');
const addItem = function(usersid, item , categoryid) {
  const query = `
		INSERT INTO to_do_lists (user_id, item, category_id)
  	VALUES ($1, $2, $3)
  	RETURNING *;`;
  const values = [usersid, item, categoryid];
  return db.query(query, values)
    .then(res => res.rows[0])
    .catch(err => {
      console.error('query error', err.stack);
    });
};

module.exports = addItem;


