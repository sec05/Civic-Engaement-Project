import info from "../db.json"
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
export default async function getRoomIds() {


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


   
  client.connect(async (err) => {
      if (err) console.log(err);
     
       client.db("PBData").collection("PBRooms").find({}, { _id: 1 }).toArray((err, result) => {
        result.map((res, index) => {

          ids.push({
            params: {
              id: res._id,
            }
            
          });
          
        })
      });


    })
   
}