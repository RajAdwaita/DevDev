const mongoose = require('mongoose')

async function connectionToDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectionToDB
}