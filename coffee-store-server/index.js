const express = require('express');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3001 ;
const cors = require('cors');
app.use(cors());
app.use(express.json())
// coffee-store
// 3gf4TTEWqCweLrwT
console.log(process.env.DB_USER)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gbbfjrz.mongodb.net/?appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const coffeesCollection = client.db("CoffeesDB").collection("Coffees");
    app.get("/coffees", async(req,res)=>{
      const result = await coffeesCollection.find().toArray();
      res.send(result)
    })
    app.get("/coffees/:id",async(req,res)=>{
      const id = req.params.id;
      console.log(id)
      const query = {_id : new ObjectId(id)};
      const result = await coffeesCollection.findOne(query);
      res.send(result)
    })
    app.post("/coffees", async(req,res)=>{
      const newCoffee = req.body;
      console.log(newCoffee)  ;
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result)
    })
    app.delete("/coffees/:id", async(req,res) =>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await coffeesCollection.deleteOne(query);
      res.send(result)
    })
    app.put("/coffees/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const updatedCoffe = req.body;
      const options = {upsert : true};
      const updatedDoc = {
        $set : updatedCoffe
      }
      const result = await coffeesCollection.updateOne(filter,updatedDoc,options);
      res.send(result)
    })
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); 
  }
}
run().catch(console.dir);

app.get('/', (req,res) =>{
    res.send('This is Coffee Server')
})

app.listen(port, () =>{
    console.log(`Thi server is running on port ${port}`)
})