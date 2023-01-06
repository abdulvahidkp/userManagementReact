const router = require('express').Router();

const userController = require('../CONTROLLERS/userController');

//userRoutes
router.get('/',userController.getLogin);
    
module.exports = router;