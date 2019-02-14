const express = require('express');
const router = express.Router();



// It sends the login page
router.get('/login',(req,res) =>res.render('login'));

// Create a register page

router.get('/register',(req,res) => res.render('register'));

//Register handles
router.post('/register',(req,res)=>{
    console.log(req.body);
    const{name,email,password,password2} =req.body;
    let errors = [];

    // Check required fields
    if(!name||!email||!password||!password2){
     errors.push({msg:'Please fill in all fields'});
    }

    // Check passwords match
    if(password !== password2){
        errors.push({msg:`Passwords do not match`});
    }
    // Check pass length
    if(password.length < 6){
        errors.push({msg:'Password should be at least 6 characters'});
    }

    if(errors.length > 0){
      // render the registration form
      res.render(`register`,{
        errors,
        name,
        email,
        password,
        password2
      })
    }
    else{
        res.send('pass');
    }

})


module.exports = router