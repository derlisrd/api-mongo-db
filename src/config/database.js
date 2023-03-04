import mongoose from "mongoose";
import config from "./config"

mongoose.connect(config.mongodbURL,{})
    .then( result => console.log('database connect'))
    .catch( err => console.log(err))


