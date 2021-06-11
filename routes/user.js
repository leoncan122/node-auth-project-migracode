const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const generateJWT = require("../utils/generateJWT");
const authenticate = require('../middleware/authenticate')

const usersDb = require('../database/db.json')

const router = express.Router()

//user registration sign-up
router.post('/sign-up', async(req, res) => {
    const {name, email, password} = req.body;

    try{
        const user = usersDb.filter( user => user.email === email);

        if (user.length > 0) {
            return res.status(400).json({error: "User already exist!"});
        };

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)

        const newUser = {
            id : Math.max(usersDb.map( u => u.id)) +1,
            name : name,
            email : email,
            password : encryptedPassword
        }

        usersDb.push(newUser)

        fs.writeFileSync('/home/leoncan122/node/node-auth-project-migracode/database/db.json',
         JSON.stringify(usersDb));

        const jwtToken = generateJWT(newUser.id)

        res.status(201).send({jwtToken: jwtToken, isAuthenticated: true})

    }
    catch (error) {
        console.error(error.message)
        res.status(500).send({error: error.message})
    }
});
//user registration sign-in 
router.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await usersDb.filter( user => user.email === email)

        if (user.length === 0) {
            res.status(401).json({error: "Invalid credential", isAuthenticated: false})
        }

        const isValidPassword = await bcrypt.compare(password, user[0].password)
        
        if(!isValidPassword) {
            res.status(401).json({error: "Invalid credential", isAuthenticated: false})
        }

        const jwtToken = generateJWT(user[0].id)

        return res.status(201).json({ jwtToken, isAuthenticated: true})

    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

//user authorization
router.post("/auth", authenticate, (req, res) => {
    try {
      
      res.status(200).send({isAuthenticated: true});
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send({error: error.message, isAuthenticated: false});
    }
  });
module.exports = router;