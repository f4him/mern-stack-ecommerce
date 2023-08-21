const mongoose = require('mongoose')


const connectDatabase = () => {

    
    const url = process.env.DB_URI;
    
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    mongoose.connect(url,connectionParams)
    .then( (data) => {
        console.log(`Connected to the database ${data.connection.host} `)
    })
}

module.exports = connectDatabase