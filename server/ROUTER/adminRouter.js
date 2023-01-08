const router = require('express').Router();
const adminController = require('../CONTROLLERS/adminController')

//adminRoutes
router.post('/',adminController.postLogin);
router.get('/userDetails',adminController.getUsers)
router.post('/deleteUser',adminController.deleteUser)

module.exports = router;