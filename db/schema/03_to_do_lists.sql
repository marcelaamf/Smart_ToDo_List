DROP TABLE IF EXISTS to_do_lists CASCADE;
CREATE TABLE to_do_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  item VARCHAR(255) NOT NULL,
  cateqory_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
