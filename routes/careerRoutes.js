const express = require('express')
const router = express.Router();
const {authUser} = require('../utils/auth');

const { uploadImage } = require('../utils/multer');
const { updateCareer, getCareers, createCareer, deleteCareer } = require('../modules/career');







router.put('/career', authUser ,uploadImage ,updateCareer)
router.get('/career' ,getCareers)
router.post('/career', authUser, uploadImage ,createCareer)
router.delete('/career',authUser, deleteCareer)






module.exports = router;