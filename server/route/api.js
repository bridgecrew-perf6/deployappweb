
import express from "express";
import homeController from "../controller/homeController"
import pool from '../model/connectDB'
import path from "path"

let router = express.Router();


const initAPI = (app) => {

    router.get("/getProduct", async (req, res) => {
        const [rows, rs] = await pool.query('SELECT * FROM product')
        res.status(200).json({ data: rows })

    })

    router.get("/img/:nameImg", (req, res) => {
        res.sendFile(path.resolve('./public/images/' + req.params.nameImg))

    })


    return app.use("/api-v1", router);
}

export default initAPI
