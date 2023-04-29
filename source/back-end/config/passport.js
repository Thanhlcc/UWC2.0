const fs = require('fs')
const path =require('path')
const User = require('mongoose').models('Users');

const pathToKey = path.resolve(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');


module.exports = (passport) =>{}
const options = {};