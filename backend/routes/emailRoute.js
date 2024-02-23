const express = require("express")
const router = express.Router();
const sendEMail = require('../controllers/sendMail')


router.post('/email', sendEMail);

module.exports = router;