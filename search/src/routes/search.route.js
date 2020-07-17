const router = mainModule.express.Router();
const search_controller = require('../controllers/search.controller');

router.post('/',       search_controller.search);

module.exports = router;