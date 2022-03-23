
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
        res.set('Access-Control-Allow-Origin', '*');

        res.sendFile(path.resolve('./public/images/' + req.params.nameImg))
    })

    router.post('/getLogin', async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        res.set('Access-Control-Allow-Origin', '*');

        const [rows, results] = await pool.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password]);
        res.status(200).json({ data: rows })

    })

    return app.use("/api-v1", router);
}

export default initAPI
