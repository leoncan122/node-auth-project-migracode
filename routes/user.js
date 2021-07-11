const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const localStorage = require("local-storage")
const { v4: uuidv4 } = require('uuid');
const generateJWT = require("../utils/generateJWT");
const authenticate = require('../middleware/authenticate')
const path = require('path')
const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'node-auth',
  password: 'newPassword',
  port: 5432
})

const usersDb = require('../database/db.json');


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
            id : uuidv4(),
            name : name,
            email : email,
            password : encryptedPassword
        }

        usersDb.push(newUser)

        fs.writeFileSync(path.join(__dirname, '../database/db.json'),
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
        const user = usersDb.filter( user => user.email === email)

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

router.get('/name', authenticate,  async (req, res) => {

    const {id} = req.user
    
    try {
        const user = usersDb.filter( user => user.id === id)
        
        if (user.length === 0) {
            res.status(500).json({error: "Invalid credential", isAuthenticated: false})
        }

        return res.status(200).json({ user: user[0] })

    } catch (error){
        console.error(error.message);
        res.status(500).json({error: error.message, isAuthenticated: false})
    }

})
router.get('/:id/messages',  async (req, res) => {
    const {id} = req.params

    try {
        pool.connect( (err,client, release) => {
            if (err) {
                return res.send('Error acquiring client')
            }
            client.query('SELECT * FROM messages WHERE to_user_id = $1', [id], (err, result) => {
                release;
                if (result.rowCount > 0) {
                    res.status(200).send(result.rows)
                } else {
                    res.status(404).send('There are not messages already')
                }

            })
        })
    } catch {}
})
router.get('/profile', authenticate,  async (req, res) => {
    const {id} = req.params

    try {
        pool.connect( (err,client, release) => {
            if (err) {
                return res.send('Error acquiring client')
            }
            client.query('SELECT * FROM users WHERE id = 1', (err, result) => {
                release;

                if (result.rowCount > 0) {
                    res.status(200).json(result.rows[0])
                } else {
                    res.status(404).send('There are not data profile')
                }

            })
        })
    } catch {}
})
module.exports = router;