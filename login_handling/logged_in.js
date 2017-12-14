'use strict';

// Reads Cookie Data to Determin if User is Logged in.
// If not, then returns
exports.logged_in = (req, res, next) =>
{
    console.log('LOGGED');
    next();
};