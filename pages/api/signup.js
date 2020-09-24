const bcrypt = require("bcrypt");
const saltRounds = 10;
import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
import withSession from "../../helpers/sessions"
export default withSession(async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
        if (err) console.log(err);
        client.db("PBData").collection("PBUsers").find({ username: req.body.username }).toArray(async (err, result) => {
            if (err) console.log(err);
            if (result.length >= 1) {
                await res.status(403).end();
            }
            else if (result.length === 0) {
                await bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                    if (err) console.log(err);
                    req.body.password = hash;

                    const collection = client.db("PBData").collection("PBUsers");
                    collection.insertOne(req.body, (err, res) => {
                        if (err) console.log(err);

                    });

                });
                await req.session.set("user", req.body.username);
                await req.session.save();
                await res.status(201).end();

            }
        });
    });
    await client.close();

})
