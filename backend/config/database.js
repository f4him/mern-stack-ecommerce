const mongoose = require('mongoose')


const connectDatabase = () => {

    
    const url = process.env.DB_URI;
    
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}

module.exports = connectDatabase