
const USERS_SERVICE = '/api/v1/users';
const user = require('../routes/user.route');

module.exports = {
    usingMiddlewares(app) {
        app.use(mainModule.cors());// tood: create cors // or reverse proxy
        app.use(mainModule.express.urlencoded({ extended: true }))
        app.use(mainModule.express.json()); 
        app.use(mainModule.errorhandler());
        app.use(USERS_SERVICE, user);
    }
};