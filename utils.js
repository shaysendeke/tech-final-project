import fs from "fs"
import dotenv from "dotenv"
dotenv.config()
const URL=process.env.MONGO_URL
import MongoDB from "mongodb"
const MongoClient = MongoDB.MongoClient
const dbName= "Tickets"
const collectionContacts = "contacts"
const collectionPurchases= "purchases"

function addContact(req, res) {
    MongoClient.connect (URL, function(err, db) {
        if (err) throw err;
        const dbo=db.db(dbName)
        let newContact = req.body
        console.log(newContact);
        dbo.collection(collectionContacts).insertOne(newContact, function (err, resData){
            if (err) throw err
            res.sendStatus(201)
        })
    })
}

function addPurchase(req, res) {
    MongoClient.connect (URL, function(err, db) {
        if (err) throw err;
        const dbo=db.db(dbName)
        let newPurchase = req.body
        console.log(newPurchase);
        dbo.collection(collectionPurchases).insertOne(newPurchase, function (err, resData){
            if (err) throw err
            res.sendStatus(201)
        })
    })
}

export {addContact, addPurchase }