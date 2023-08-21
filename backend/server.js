const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database")

//uncaught

process.on("uncaughtException", err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down due to uncaught exception");
        process.exit(1);
    
});


//config
dotenv.config({path: "backend/config/config.env"});

connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})



// unhandled promise rejection

process.on("unhandledRejection", err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1);
    })
});