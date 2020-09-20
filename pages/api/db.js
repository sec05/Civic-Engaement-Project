const MongoClient = require('mongodb').MongoClient;
import info from "../../db.json"
export default class databases {
  constructor() {
    this.uri = `mongodb+srv://sec05:${info.password}@pbcluster.ure7r.mongodb.net/${info.name}?retryWrites=true&w=majority`;
    this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.insertUser = this.insertUser.bind(this);
    this.insertRoom = this.insertRoom.bind(this);
    this.searchUsername = this.searchUsername.bind(this);
  }
  async connect(mongoConnection) {
    await mongoConnection.connect(err => {
      if (err) console.log(err);
    });
  }
  async disconnect(mongoConnection) {
    await mongoConnection.close();
  }

  async insertUser(userObj,mongoConnection) {

    try {
      
      const collection = mongoConnection.db("PBData").collection("PBUsers");
      await collection.insertOne(userObj, (err, res) => {

        try {

          console.log("User inserted!");
        }
        catch (error) {
          if (err) console.log(err);
          console.log(error);
        }
      });
    }
    catch (error) {
      console.log(error);
    }
  

  }
  async insertRoom(roomObj, mongoConnection) {

    try {
      
      const collection = mongoConnection.db("PBData").collection("PBRooms");
      await collection.insertOne(roomObj, (err, res) => {
        try {

          console.log("Room inserted!");
        }
        catch (error) {
          if (err) console.log(err);
          console.log(error);
        }
      })
    }
    catch (error) {
    
      console.log(error);
    }
  }
  async searchUsername(user, mongoConnection) {
   
    try {
      const collection = mongoConnection.db("PBData").collection("PBUsers");
      const search = collection.find({ username: user }).toArray((err, result) => {
        try {

          console.log(result);
          console.log(result.length);
        }
        catch (error) {
          if (err) console.log(err);
          console.log(error);
        }
      });

    }
    catch (error) {
      
      console.log(error);
    }
    
  }
}