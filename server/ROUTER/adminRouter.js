const router = require('express').Router();

const adminController = require('../CONTROLLERS/adminController')

//adminRoutes
router.get('/',adminController.getLogin);

module.exports = router;