// Puzzle Authors
'use strict';
const ObjectID = require('mongodb').ObjectID;

module.exports = class user
{
    constructor(username, userpass, useremail) 
    {
        // auto _id
        this.user_name    = username;
        this.user_pass    = userpass;
        // email optional value
        this.user_email   = (username) ? useremail : '';
    }
};