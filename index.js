const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/routes/route')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://insh007:Inshad123@firstcluster.p0r04o1.mongodb.net/project5-Self",{
    useNewUrlParser : true
},mongoose.set('strictQuery', false))
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(3000, function(){
    console.log("Express app is running on port:",3000)
})