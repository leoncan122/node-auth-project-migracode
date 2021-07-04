const jwt = require('jsonwebtoken')
require("dotenv").config()

function authenticate (req, res, next ) {

    //get token from header
    let token = req.header("Authorization")

    if (!token) {
        res.status(500).json({ message: "Authorization denied", isAuthenticated: false})
    }

    token = token.split(" ")[1]

    //verify token using JWT
    try {
        //this will return the user ID or the payload we specicated in our generateJWT.js
        const verify = jwt.verify(token, process.env.jwtSecret)
        console.log(verify)
        req.user = verify.user

        next();
    }
    catch (error) {
        console.error(error.message)
        res.status(401).json({ message: "Token is not valid!", isAuthenticated: false})
    }
}
module.exports = authenticate;