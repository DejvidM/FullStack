const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api' , ProductController.productCreate);
    app.get('/api' , ProductController.getAll);
    app.get('/api/details/:title' , ProductController.getOne);
    app.delete('/api/:title' , ProductController.deleteOne);
    app.patch('/edit/:title' , ProductController.updateOne)
}