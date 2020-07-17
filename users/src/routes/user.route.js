const router = mainModule.express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/',       user_controller.create);

module.exports = router;