const pgClient = require('../settings/db');
const sanitizePath = require('../helpers/sanitizePath');

// TO BE CONTINUED...
exports.getAllUi = function(req, res, next) {
  pgClient.query('SELECT * FROM pages ORDER BY id ASC', (error, data) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(data.rows);
  });
};

// get all pages (meta)
exports.getPages = function(req, res, next) {
  pgClient.query('SELECT * FROM pages ORDER BY id ASC', (error, data) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(data.rows);
  });
};

// post page
exports.postPage = function(req, res, next) {
  const { nameOfPage, nameOfPageShort, path: urlPath, description = '', active = true } = req.body;

  if (!nameOfPage || !nameOfPageShort) {
    let error = new Error('Invalid input.');
    error.statusCode = 400;

    return next(error);
  }

  /** NOTE: paths are hardcoded for now, for future use */
  const path = sanitizePath(urlPath, nameOfPageShort);

  pgClient.query(
    'INSERT INTO pages (name_of_page, name_of_page_short, path, description, active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nameOfPage, nameOfPageShort, path, description, active],
    (error, data) => {
      if (error) {
        return next(error);
      }
      res.status(201).json(data.rows[0]);
    },
  );
};

// put page
exports.putPage = function(req, res, next) {
  const id = parseInt(req.params.id);
  const { nameOfPage, nameOfPageShort, path: urlPath, description = '', active = true } = req.body;

  if (!id) {
    const error = new Error('Parameters missing.');
    error.statusCode = 400;

    return next(error);
  }

  if (!nameOfPage || !nameOfPageShort) {
    let error = new Error('Invalid input.');
    error.statusCode = 400;

    return next(error);
  }

  /** NOTE: paths are hardcoded for now, for future use */
  const path = sanitizePath(urlPath, nameOfPageShort);

  pgClient.query(
    'UPDATE pages SET name_of_page = $1, name_of_page_short = $2, path = $3, description = $4, active = $5 WHERE id = $6 RETURNING *',
    [nameOfPage, nameOfPageShort, path, description, active, id],
    (error, data) => {
      if (error) {
        return next(error);
      }
      res.status(201).json(data.rows[0]);
    },
  );
};

// delete page
exports.deletePage = function(req, res, next) {
  const id = parseInt(req.params.id);

  if (!id) {
    const error = new Error('Parameters missing.');
    error.statusCode = 400;

    return next(error);
  }

  pgClient.query('DELETE FROM pages WHERE id = $1 RETURNING *', [id], (error, data) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(data.rows[0]);
  });
};
