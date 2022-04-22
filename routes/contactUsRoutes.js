const express = require('express')
const router = express.Router();
const {authUser} = require('../utils/auth');

const { getContactUs, createContactUs, deleteContactUs } = require('../modules/contactUs');







router.get('/contact' ,getContactUs)
router.post('/contact' ,createContactUs)
router.delete('/contact',authUser, deleteContactUs)






module.exports = router;