const bcrypt = require('bcrypt');
const saltRounds = 10;

import databases from "../db"

const signupDB = new databases;

export default (req,res)=>{
    try{
       // req.statusCode(201).end();
       bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
           req.body.password = hash;
           console.log(req.body.password)
        signupDB.insertUser(req.body);
    });
        
    }
    catch(error)
    {
        console.log(error);
    }
}