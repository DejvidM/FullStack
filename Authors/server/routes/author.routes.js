const AuthorRoutes = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/authors' , AuthorRoutes.getAll),
    app.post('/authors' , AuthorRoutes.createOne),
    app.get('/authors/:_id' , AuthorRoutes.getOne),
    app.patch('/authors/:_id' , AuthorRoutes.updateOne),
    app.delete('/authors/:_id', AuthorRoutes.deleteOne)
}