
import express from "express";
import homeController from "../controller/homeController"
import pool from '../model/connectDB'
let router = express.Router();


const initAPI = (app) => {

    router.get("/getProduct", async (req, res) => {
        const [rows, rs] = await pool.query('SELECT * FROM product')
        res.status(200).json({ data: rows })

    })


    return app.use("/api-v1", router);
}

export default initAPI
