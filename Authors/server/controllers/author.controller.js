const Author = require('../models/authors.model');

module.exports.createOne = (req , res) => {
    Author.create(req.body)
        .then( (author) => res.json(author))
        .catch((err) => res.status(400).json(err));
}

module.exports.getAll = (req , res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors ))
        .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req , res) => {
    Author.findOne({ _id : req.params._id})
        .then( (oneAuthor) => res.json(oneAuthor))
        .catch( (err) => res.status(400).json(err))
}

module.exports.deleteOne = (req , res) => {
    Author.deleteOne({_id : req.params._id})
        .then( result =>  res.json({result : result}))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOne = (req , res) => {
    Author.updateOne({_id : req.params._id} , req.body, {runValidators : true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}