const express = require('express')
const router = express.Router();
const {authUser} = require('../utils/auth');

const { uploadImage } = require('../utils/multer');
const { updateCompany, getCompanies, createCompany, deleteCompany } = require('../modules/ourCompany');







router.put('/company', authUser ,uploadImage ,updateCompany)
router.get('/company' ,getCompanies)
router.post('/company', authUser, uploadImage ,createCompany)
router.delete('/company',authUser, deleteCompany)






module.exports = router;