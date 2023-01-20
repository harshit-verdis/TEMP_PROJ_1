const mongodb = require('mongodb');
const { mongo } = require('mongoose');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'Temp1'

MongoClient.connect(connectionUrl,{useNewUrlParser: true},(error,client)=>{
    if(error)
        console.log("UNable to connect to database")
    else
        console.log("Connected to database")

    const db = client.db(databaseName);

    db.collection('TeamcityCollection1').insertOne({
        dis : "it's teamcity based local update"
    },(err,res)=>{
        console.log(res)
    })

})

