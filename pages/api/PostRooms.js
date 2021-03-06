import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;

export default async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
        if (err) console.log(err);
        const collection = client.db("PBData").collection("PBRooms");
        collection.find().toArray(async (err, result) => {
            if (err) console.log(err);
            if (result.length >= 21) {
                res.status(403).end();
            }
            else {
                req.body["participants"] = 0;
                collection.insertOne(req.body, (err, doc) => {
                    if (err) console.log(err);
                    collection.find().limit(1).sort({ $natural: -1 }).toArray(async (err, result) => {
                        res.status(201).send(result[0]._id);
                    });
                });

            }

        });



    });
    await client.close();
}