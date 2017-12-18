const UserController = require('../controllers/userController')

exports.routes = [
    { method: 'GET', path: '/users', config: UserController.get },
    { method: 'GET', path: '/users/{id}', config: UserController.getById }
];  