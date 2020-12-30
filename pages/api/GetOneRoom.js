import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
const ObjectId = require("mongodb").ObjectID;
export default async (req, res) => {



    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
        if (err) console.log(err);
        
        const collection = client.db("PBData").collection("PBRooms");
        collection.findOne({ "_id": new ObjectId(req.body.path) }, async (err, result) => {
            if (err) console.log(err);
           // console.log(result);
            await res.status(200).send(result);
        });


    });
    await client.close();

}