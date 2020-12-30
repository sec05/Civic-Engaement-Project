import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
export default(req,res)=>
{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err)=>{
        if(err)console.log(err);
        client.db("PBData").collection("PBUsers").find({ username: req.body.username }).toArray(async (err, result) => {
            if(err) console.log(err);
           let newVal = result[0].Calls + 1
             client.db("PBData").collection("PBUsers").findOneAndUpdate({username: req.body.username},{ $set:{Calls: newVal}}, {upsert: false}, (err,doc)=>
                {
                    if(err) console.log(err);
                    res.status(200).end();
                });  
        });
       
    });
    client.close();
}