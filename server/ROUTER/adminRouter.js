const router = require('express').Router();

const adminController = require('../CONTROLLERS/adminController')

//adminRoutes
router.post('/',adminController.postLogin);
router.post('/deleteuser',adminController.deleteUser)

module.exports = router;