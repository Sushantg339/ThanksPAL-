

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const { url } = require('inspector')

const mongo_url = "mongodb+srv://abhibcs44:zJkGjiw1R3IzTgLT@cluster0.e1tyvzx.mongodb.net/ThanksPal?retryWrites=true&w=majority";
async function main(){
    await mongoose.connect(mongo_url)
}

main().then((res)=>{
    console.log("connected to db")
}).catch((err)=>{
console.log(err)
})
// ("dotenv").config()

// const MONGO_URL = process.env.mongo_url
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"))
// app.engine("ejs", ejsMate)

app.get("/", (req,res)=>{
    res.render("index");
})


app.listen(3000, (req,res)=>{
    console.log("app is listening on port 3000")
})