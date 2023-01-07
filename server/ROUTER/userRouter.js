const router = require('express').Router();

const userController = require('../CONTROLLERS/userController');

//userRoutes
router.post('/signup',userController.postSignup);
router.post('/',userController.postLogin);
router.get('/home',userController.getHome);
router.post('/updateProfile',userController.updateProfile);

    
module.exports = router;