const express = require('express');
const router = express.Router();



// It sends the login page
router.get('/login',(req,res) =>res.send('Login'));

// Create a register page
router.get('/register',(req,res) => res.send('Register'));



module.exports = router