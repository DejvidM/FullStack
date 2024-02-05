const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api' , ProductController.productCreate);
    app.get('/api' , ProductController.getAll);
}