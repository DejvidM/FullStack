const Player = require('../models/player.model')

module.exports.All = (req , res) => {
    Player.find()
        .then((allPlayers) => res.json( {players : allPlayers }))
        .catch((err) => res.json(err))
}

module.exports.NewPlayer = ( req , res) => {
    Player.create( req.body) 
        .then((newPlayer) => res.json(newPlayer))
        .catch( (err) => res.status(400).json(err))
}

module.exports.removePlayer = (req , res) => {
    Player.deleteOne( {_id : req.params._id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}

module.exports.changeStatus = (req , res) => {
    Player.updateOne({_id : req.params.id} , req.body , {runValidators : true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
}