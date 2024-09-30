import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(express.json());





app.use((req,res)=>{
    res.status(404)
    res.type("application/json")
    res.send('404 - Not Found')
})

app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500).json({ msg: 'Something went wrong' })
})

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, ()=>{
            console.log(`app listening on port ${PORT}`)
        })
        console.log('Connected successfully to the database')
    })
    .catch((err) => {
        console.log(err.message, "Error Occured")
    })


