/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://DevSarda:DevSarda@ds135800.mlab.com:35800/demodatabase';//'mongodb://User7:User7@ds155201.mlab.com:55201/aplwebdemo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
