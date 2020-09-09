const MongoClient = require('mongodb').MongoClient;
import info from "../../db.json"
export default class databases
{
  constructor()
  {
    this.uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
    this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.insertUser = this.insertUser.bind(this);
    this.insertRoom = this.insertRoom.bind(this);
  }
 async insertUser(userObj)
  {
    await this.client.connect(async err => {
      try{

      const collection = this.client.db("PBData").collection("PBUsers");
      await collection.insert(userObj, (err,res)=>{
      
        try{
          console.log("User inserted!");
        }
        catch(error)
        {
          console.log(error);
        }
      })
      }
      catch(error)
      {
        console.log(error);
      }
     
      
      await this.client.close();
    });
  }
  async insertRoom(roomObj)
  {
    await this.client.connect(async err => {
      try{

      const collection = this.client.db("PBData").collection("PBRooms");
      await collection.insert(roomObj, (err,res)=>{
        try{
          console.log("Room inserted!");
        }
        catch(error)
        {
          console.log(error);
        }
      })
      }
      catch(error)
      {
        console.log(error);
      }
     
      
      await this.client.close();
    });
  }
}