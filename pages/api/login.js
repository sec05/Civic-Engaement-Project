const bcrypt = require("bcrypt");
const saltRounds = 10;
import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
import withSession from "../../helpers/sessions"
export default withSession( async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
        if (err) console.log(err);
        client.db("PBData").collection("PBUsers").find({ username: req.body.username }).toArray(async (err, result) => {
            if (err) console.log(err);
            if(result.length === 0)
            {
                res.status(403).end();
            }
            else{
                bcrypt.compare(req.body.password, result[0].password, async(err,result)=>{
                if(err)console.log(err);
                if(result===true)
                {await req.session.set("user", req.body.username);
                    await req.session.save();
                    res.status(200).end();
                    
                }
                if(result===false)
                {
                    res.status(403).end();
                }
            });
            }
            

            });
    });
    await client.close();
});