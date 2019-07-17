const PageController = require('../controllers/pages');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'API is running.' });
  });
  // CLIENT ROUTES
  app.get('/ui', PageController.getAllUi);
  // app.get('/about', PageController.getAboutContent);
  // app.get('/projects', PageController.getProjectsContent);
  // app.get('/ees', PageController.getEESContent);

  // ADMIN ROUTES
  // pages
  app.get('/pages', PageController.getPages);

  // PROTECTED ROUTES
  // pages
  app.post('/pages', PageController.postPage);
  app.put('/pages/:id', PageController.putPage);
  app.delete('/pages/:id', PageController.deletePage);
};
