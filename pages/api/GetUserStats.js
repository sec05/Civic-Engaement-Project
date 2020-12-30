import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
const ObjectId = require("mongodb").ObjectID;
export default async (req, res) => {



    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
        if (err) console.log(err);
        const collection = client.db("PBData").collection("PBUsers");
        collection.find({ username: req.body.username }).toArray( async (err, result) => {
            if (err) console.log(err);
            await res.status(200).send(result[0].Calls);
        });
           


    });
    await client.close();

}