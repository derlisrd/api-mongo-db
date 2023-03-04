import express from "express";
import morgan from "morgan";
import IndexRoutes from "./routes";
const cors = require('cors')

const app = express();
app.set('PORT', process.env.PORT || 3000);

app.use(cors({
    origin:"*"
}))
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/v1/",IndexRoutes)

export default app;