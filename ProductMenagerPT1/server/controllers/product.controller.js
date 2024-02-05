const { response } = require('express');
const Product = require('../models/product.model');

module.exports.productCreate = (req , res) => {
    Product.create(req.body)
        .then( (product) => res.json(product))
        .catch((err) => { message : 'smth went wrong',      res.json(err)});
}

module.exports.getAll = (req , res) => {
    Product.find()
        .then(allProducts => res.json({ products : allProducts }))
        .catch(err => res.json(err))
}