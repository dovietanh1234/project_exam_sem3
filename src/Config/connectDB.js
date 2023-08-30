const mongoose = require('mongoose');

function newConnection(uri){
    const conn = mongoose.createConnection(uri);

    conn.on('connected', function(){
        console.log(`mongoose db connected ${this.name}`);
    })
    
    conn.on('disconnected', function(){
        console.log(`mongoose db disconnected ${this.name}`);
    })
    
    conn.on('error', function(error){
        console.log(`mongoose db error ${JSON.stringify(error)}`);
    })

    return conn;
}

// make multiple connection:
const adminCollection = newConnection('mongodb://localhost:27017/admin');
const configCollection = newConnection('mongodb://localhost:27017/config');

module.exports = {
    adminCollection,
    configCollection
}