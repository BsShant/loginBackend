const express = require('express')
const router = express.Router();
const {authUser} = require('../utils/auth');

const { getJobRequests, createJobRequest, deleteJobRequest } = require('../modules/jobRequest');







router.get('/job' ,getJobRequests)
router.post('/job' ,createJobRequest)
router.delete('/job',authUser, deleteJobRequest)






module.exports = router;