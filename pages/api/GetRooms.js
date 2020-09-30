import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;

const GetRooms = (async(req,res)=>{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async(err)=>{
        if(err) console.log(err);
        client.db("PBData").collection("PBRooms").find({type: "room"}).toArray(async (err, result) => {
            if(err) console.log(err);
            else{
                console.log(result);
                res.status(200).send(result);
            }
        })
    })
})
export default GetRooms;