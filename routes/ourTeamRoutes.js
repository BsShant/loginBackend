const express = require('express')
const router = express.Router();
const {authUser} = require('../utils/auth');

const { uploadImage } = require('../utils/multer');
const { updateTeamMember, getTeamMembers, createTeamMember, deleteTeamMember } = require('../modules/ourTeam');







router.put('/teamMember', authUser ,uploadImage ,updateTeamMember)
router.get('/teamMember' ,getTeamMembers)
router.post('/teamMember', authUser, uploadImage ,createTeamMember)
router.delete('/teamMember',authUser, deleteTeamMember)






module.exports = router;