
const SEARCH_SERVICE = '/api/v1/search';
const search = require('../routes/search.route');

module.exports = {
    usingMiddlewares(app) {
        app.use(mainModule.cors());// tood: create cors // or reverse proxy
        app.use(mainModule.express.urlencoded({ extended: true }))
        app.use(mainModule.express.json());         
        app.use(mainModule.errorhandler());
        app.use(SEARCH_SERVICE, search);
    }
};