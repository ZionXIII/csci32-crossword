'use strict';
const MongoClient = require('mongodb').MongoClient;
const puzzlecontents = require('./puzzlecontents');
const ObjectID = require('mongodb').ObjectID;

// database
var db;

exports.connectDB = () =>
{
    return new Promise((resolve, reject) =>
    {
        if (db) return resolve(db);
        var un  = 'cwdev';
        var pw  = 'StanceSoftly_16';
        var url = `mongodb://${un}:${pw}@ds137256.mlab.com:37256/crossword-dev`;
        // Connect to DB
        MongoClient.connect(url, (err, _db) =>
        {
            if (err) return reject(err);
            db = _db;
            resolve(_db);
        });
    });
};


