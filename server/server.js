import express from "express";
import viewEngine from "./configs/viewEngine";
import { initWebRouter } from "./route/web";
import initAPI from "./route/api";

import api from './route/api'
import multer from 'multer'
import path from "path"
import updateProduct from "./controller/update"
import session from "express-session";

require('dotenv').config()
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || '3000';
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
viewEngine(app);
initWebRouter(app);
initAPI(app)





app.listen(port, () => {
    console.log("Runing.....");
})
