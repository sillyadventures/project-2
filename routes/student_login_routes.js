const User = require('../models/student')
const express = require('express')
const router = express.Router()
const passport = require('../config/ppConfig')

router.get('/', (req, res) => {
  res.render('students/login')
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/studentlogin'
}))

module.exports = router
