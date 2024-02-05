const { response } = require('express');
const Product = require('../models/product.model');

module.exports.productCreate = (req , res) => {
    Product.create(req.body)
        .then( (product) => res.json(product))
        .catch((err) => res.json(err));
}

module.exports.getAll = (req , res) => {
    Product.find()
        .then(allProducts => res.json(allProducts ))
        .catch(err => res.json(err))
}

module.exports.getOne = (req , res) => {
    Product.findOne({ title : req.params.title})
        .then( (oneProduct) => res.json(oneProduct))
        .catch( (err) => res.json(err))
}

module.exports.deleteOne = (req , res) => {
    Product.deleteOne({title : req.params.title})
        .then( result =>  res.json({result : result}))
        .catch(err => res.json(err))
}