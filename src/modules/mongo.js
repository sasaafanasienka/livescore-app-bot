import mongoose, { Schema, model } from "mongoose";


const uri = "mongodb+srv://afanasienka:7tGGK2Uppt3BrAXf@sixgamecluster.3dj4elg.mongodb.net/?retryWrites=true&w=majority";

const UserSchema = new Schema({
  telegram_id: String,
  subscriptions: [String]
})

export const User = model('User', UserSchema)

export async function runMongo() {
  mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Подключено к MongoDB');
  })
  .catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
  });
}
// import { MongoClient, ServerApiVersion } from 'mongodb';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export async function runMongo() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);
