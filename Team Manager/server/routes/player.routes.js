const PlayerRoutes = require('../controllers/player.controllers')

module.exports = (app) => {
    app.get('/players' , PlayerRoutes.All);
    app.post('/players' , PlayerRoutes.NewPlayer);
    app.delete(`/players/:_id` , PlayerRoutes.removePlayer);
    app.patch('/players/:id' , PlayerRoutes.changeStatus)
}