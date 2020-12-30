import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
const ObjectId = require("mongodb").ObjectID;
export default(req,res)=>
{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err)=>{
        if(err)console.log(err);
        client.db("PBData").collection("PBRooms").find({ _id: new ObjectId(req.body.id) }).toArray(async (err, result) => {
            if(err) console.log(err);
            if(req.body.change==="join")
            {
                let newVal = result[0].participants + 1
            
                client.db("PBData").collection("PBRooms").findOneAndUpdate({"_id":new ObjectId(req.body.id) },{ $set:{participants: newVal}}, {upsert: false}, (err,doc)=>
                {
                    if(err) console.log(err);
                    res.status(200).end();
                });  
            }
           if(req.body.change === "leave")
           {
            let newVal = result[0].participants - 1
           
             client.db("PBData").collection("PBRooms").findOneAndUpdate({"_id":new ObjectId(req.body.id) },{ $set:{participants: newVal}}, {upsert: false}, (err,doc)=>
                {
                    if(err) console.log(err);
                    res.status(200).end();
                });  
            }
        });
       
    });
    client.close();
}