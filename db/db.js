//supir953_db_user`
//VIo6rT1Grh1N3xSP`
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://supir953_db_user:VIo6rT1Grh1N3xSP@cluster0.5tzkxwu.mongodb.net/";
 const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    }
    catch (error) {
        console.log('database connection error is', error);
        console.log('database connection error is', error.message);
    }

}
module.exports = connectToDB;