const keys = require('./keys');

// postgres setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});
pgClient.on('error', () => console.log('Lost postgres connection...'));

// pgClient.query('DROP TABLE IF EXISTS pages;').catch(err => console.log(err));

pgClient
  .query(
    'CREATE TABLE IF NOT EXISTS pages (id SERIAL PRIMARY KEY, name_of_page VARCHAR(50), name_of_page_short VARCHAR(20), path VARCHAR(50), description VARCHAR(50), active BOOLEAN)',
  )
  .catch(err => console.log(err));

module.exports = pgClient;
