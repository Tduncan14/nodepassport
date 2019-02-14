const express = require('express');
const router = express.Router();



// It sends the login page
router.get('/login',(req,res) =>res.render('login'));

// Create a register page

router.get('/register',(req,res) => res.render('register'));



module.exports = router