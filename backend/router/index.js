const PageController = require('../controllers/pages');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'API is running.' });
  });
  // pages
  app.get('/pages', PageController.getPages);

  // PROTECTED ROUTES
  // pages
  app.post('/pages', PageController.postPage);
  app.put('/pages/:id', PageController.putPage);
  app.delete('/pages/:id', PageController.deletePage);
};
