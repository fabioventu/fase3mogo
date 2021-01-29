var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/coll3', function (req, res, next) {
    const uri = "mongodb+srv://fabioventurini:ciao@cluster0.zx7mf.mongodb.net/life_on_land?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("life_on_land").collection("collection_3"); //Mi connetto alla collection 3
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});

module.exports = router;

