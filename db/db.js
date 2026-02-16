//supir953_db_user`
//VIo6rT1Grh1N3xSP`
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://supir953_db_user:VIo6rT1Grh1N3xSP@cluster0.5tzkxwu.mongodb.net/";"
const connectToDatabase = async () => {
    try {
         mongoose.connect(DB_URL);

        console.log("Database is connected ");

    } catch (error) {
        console.log('Database connection error is',(error);)
            \
    }
}

module.exports = connectToDatabase;