const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

//app
const app = express();
// db
mongoose
 .connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));

//middlewares
app.use(bodyParser.json());
app.use(cors());

app.use('/api', authRoutes);

const port = process.env.PORT || 8002;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});





















// const express = require('express');
// // const { Card } = require('material-ui');
// const mongoose = require('mongoose');
// // import mongoose from 'mongoose';
// const Cors = require('cors');
// const RegisterDb=require('./registerdb');
// //App Config
// const app = express();
// const port = process.env.PORT || 8001;
// const connect_url="mongodb+srv://shrutibansal:pNMmGTIc4IcFPBwz@cluster0.jcglz.mongodb.net/socialdb?retryWrites=true&w=majority"
// // Middlewares

// app.use(express.json())
// app.use(Cors())
 
// // DB config
// mongoose.connect(connect_url,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// })


// // API Endpoints
// app.get("/",(req,res)=>res.status(200).send("Welcome to Demo"));

// app.post('/social/register',(req,res)=>{
//     const dbs =req.body;
// RegisterDb.create( dbs ,(err, data) => {
//     if(err){
//         res.status(500).send(err)
//     }
//     else{
//         res.status(201).send(data)
//     }
// });
// });

// app.get('/social/register',(req,res)=>{
// RegisterDb.find((err, data) => {
//     if(err){
//         res.status(500).send(err)
//     }
//     else{
//         res.status(200).send(data)
//     }
// });
// });

// // Listener
// app.listen(port,()=>console.log('listening on localhost:'+port))