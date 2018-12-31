const express = require('express');
const router = express.Router();


// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));


// Register Handle
router.post('/register', (req, res) => {
    // console.log(req.body);
    // res.send('Hello')

    const {name, email, password, password2} = req.body;


    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields'});
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({msg: 'Passwords do  not match'});
    }

    // Check pass length
    if (password.length < 6) {
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        res.send('Passed')
    }


});

module.exports = router;