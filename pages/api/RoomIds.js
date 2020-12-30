import info from "../../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;

const RoomIds = (async(req,res)=>{
    let ids = [];
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(async (err) => {
    if (err) console.log(err);
   
     client.db("PBData").collection("PBRooms").find({}, { _id: 1 }).toArray(async(err, result) => {
      result.map((doc)=>{
      
          ids.push({
              params:{rid: doc._id}
          });
      });
      
        await res.status(200).send(ids);
      });
    });

await client.close();

});

export default RoomIds